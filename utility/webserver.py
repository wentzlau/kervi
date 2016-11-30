# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" Simple web server for the Kervi application """

try: 
    from SimpleHTTPServer import SimpleHTTPRequestHandler
except:
    from http.server import SimpleHTTPRequestHandler

try:    
    from BaseHTTPServer import HTTPServer
except:
    from http.server import HTTPServer

import threading
import kervi
import os
import time
    
server=None
def start(address):
    global server
    kervipath = os.path.dirname(kervi.__file__)
    docpath = os.path.join(kervipath,"kervi-ui/dist")
    cwd = os.getcwd()
    os.chdir(docpath)
    server = HTTPServer(address, SimpleHTTPRequestHandler)
    thread = threading.Thread(target = server.serve_forever)
    thread.daemon = True
    thread.start()
    time.sleep(2)
    #os.chdir(cwd)
    
    

def stop():
    print ("stop web server")
    server.shutdown()