import http.server
import socketserver
from urllib.parse import urlparse
import os

PORT = 8000

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Route /myapp to myapp/index.html
        # if self.path == '/myapp' or self.path == '/myapp/':
        #     self.path = '/myapp/index.html'
        self.path = self.path.replace("/myapp", "")
        
        return super().do_GET()

with socketserver.TCPServer(("", PORT), MyHandler):
    print(f"Server running at http://localhost:{PORT}")
    socketserver.TCPServer.serve_forever(socketserver.TCPServer(("127.0.0.1", PORT), MyHandler))