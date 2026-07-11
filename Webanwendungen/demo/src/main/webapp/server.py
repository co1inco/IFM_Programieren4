import http.server
import os
import re
import socketserver
from urllib.parse import urlparse

PORT = 8000
WEB_ROOT = os.path.dirname(os.path.abspath(__file__))
LAYOUT_PATH = os.path.join(WEB_ROOT, "WEB-INF", "layout", "main.jsp")
PAGES_DIR = os.path.join(WEB_ROOT, "WEB-INF", "pages")


class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        request_path = parsed.path or "/"

        if request_path.startswith("/myapp"):
            request_path = request_path[len("/myapp"):] or "/"

        if request_path in {"/", "/home"}:
            self._serve_jsp_page("home.jsp")
            return

        route_to_page = {
            "/projects": "projects.jsp",
            "/newproject": "newproject.jsp",
            "/about": "about.jsp",
            "/hello": "hello.jsp",
            "/project": "project.jsp",
            "/project/1": os.path.join("project", "1.jsp"),
            "/project/2": os.path.join("project", "2.jsp"),
            "/project/3": os.path.join("project", "3.jsp"),
            "/project/4": os.path.join("project", "4.jsp"),
        }

        page_name = route_to_page.get(request_path)
        if page_name is not None:
            self._serve_jsp_page(page_name)
            return

        self.path = request_path
        return super().do_GET()

    def do_POST(self):
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        self.wfile.write(b'{"status": "success"}')

    def _serve_jsp_page(self, page_name):
        page_path = os.path.join(PAGES_DIR, page_name)
        if not os.path.isfile(page_path):
            self.send_error(404, "Page not found")
            return

        with open(LAYOUT_PATH, "r", encoding="utf-8") as layout_file:
            layout_html = layout_file.read()

        with open(page_path, "r", encoding="utf-8") as page_file:
            page_html = page_file.read()

        page_html = self._prepare_jsp_content(page_html)
        layout_html = re.sub(
            r'<jsp:include\s+page="\$\{requestScope\.page\}"\s*/>',
            page_html,
            layout_html,
            count=1,
        )
        layout_html = self._prepare_jsp_content(layout_html)
        layout_html = layout_html.replace("${pageContext.request.contextPath}", "/myapp")
        layout_html = self._rewrite_relative_links(layout_html)

        self.send_response(200)
        self.send_header("Content-type", "text/html; charset=utf-8")
        self.end_headers()
        self.wfile.write(layout_html.encode("utf-8"))

    def _prepare_jsp_content(self, content):
        content = re.sub(r"<%@.*?%>\s*", "", content, flags=re.DOTALL)
        content = re.sub(r"<jsp:[^>]+/>", "", content)
        content = re.sub(r"<jsp:[^>]+>.*?</jsp:[^>]+>", "", content, flags=re.DOTALL)
        return content

    def _rewrite_relative_links(self, content):
        def replace_attr(match):
            attr_name = match.group("attr")
            value = match.group("value")
            if not value or value.startswith(("/", "#", "http://", "https://", "mailto:", "javascript:")):
                return match.group(0)
            if value.startswith("/myapp"):
                return match.group(0)
            return f'{attr_name}="/myapp/{value.lstrip("/")}"'

        return re.sub(
            r'(?P<attr>href|src|action|formaction)="(?P<value>[^"]*)"',
            replace_attr,
            content,
        )


if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
        print(f"Server running at http://localhost:{PORT}")
        httpd.serve_forever()