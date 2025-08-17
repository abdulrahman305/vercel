from http.server import BaseHTTPRequestHandler
from os import path

from cowpy import cow


class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/plain")
        self.end_headers()
        first = path.exists("ignoreme/first.txt")
        second = path.exists("ignoreme/second.txt")
        message = cow.Cowacter().milk(
            ("%s:%s:RANDOMNESS_PLACEHOLDER") % (first, second)
        )
        self.wfile.write(message.encode())
        return
