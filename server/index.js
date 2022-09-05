import express from 'express'
import { createServer } from 'http'

import { handler } from '../build/handler.js'
import { injectSocketIO } from './webSocketServer.js'

const port = 3000
const app = express()
const server = createServer(app)

injectSocketIO(server)

app.use(handler)

server.listen(port)