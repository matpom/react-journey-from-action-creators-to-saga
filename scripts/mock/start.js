const jsonServer = require('json-server');

const server = jsonServer.create();

server.use(jsonServer.defaults({logger: true}));

const databaseFileLocation = './scripts/mock/db.json';

server.set('port', 3001);

const router = jsonServer.router(databaseFileLocation);

server.use(router);

server.listen(3001, () =>
  console.log('Server is running on port 3001')
).on('error', () =>
  console.log('!!!Server is already running on port 3001!!!')
);
