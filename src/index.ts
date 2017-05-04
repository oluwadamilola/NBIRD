import app from './app';
import * as http from 'http';
import * as WebSocket from 'socket.io';

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server for App and Websocket
 */
const server = http.createServer(app);
const wss =  WebSocket(server, { wsEngine: 'uws' }); // new WebSocket.Server({ server });

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);

export { server, wss };

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val: string) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
