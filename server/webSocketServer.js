import { Server } from 'socket.io'

export function injectSocketIO(server) {
    const io = new Server(server);

    io.on('connection', (socket) => {

			socket.on('message', (message) => {
				io.emit('message', {
					text: message.text,
					user: message.user,
					time: new Date().toLocaleString()
				});
			})
		})
}

export const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server) {
        injectSocketIO(server.httpServer)
	}
}