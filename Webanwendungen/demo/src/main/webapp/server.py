import http.server
import socketserver
from urllib.parse import urlparse
import urllib.request
import os

import urllib

PORT = 8000

class MyHandler(http.server.SimpleHTTPRequestHandler):
    PROXY_TARGET = "https://scl.fh-bielefeld.de"  # Change this
    
    
    def do_GET(self):
        # Route /myapp to myapp/index.html
        # if self.path == '/myapp' or self.path == '/myapp/':
        #     self.path = '/myapp/index.html'
        self.path = self.path.replace("/myapp", "")
        
        return super().do_GET()
    
    def do_POST(self):
        self.send_error(404, "Page does not exist")
        # self.send_response(200)
        # self.send_header('Content-type', 'application/json')
        # self.end_headers()
        # self.wfile.write(b'{"status": "success"}')
        

with socketserver.TCPServer(("", PORT), MyHandler):
    print(f"Server running at http://localhost:{PORT}")
    socketserver.TCPServer.serve_forever(socketserver.TCPServer(("127.0.0.1", PORT), MyHandler))