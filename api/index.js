import {join} from 'path'
import jsonServer from 'json-server';

const file = join(process.cwd(), 'files', 'db.json');
const server = jsonServer.create()
const router = jsonServer.router(file.toString())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.rewriter({'/api/*': '/$1'}))
server.use(router)

export default server;