const http = require('http');
require('dotenv').config();
const app = require('./app.js');
const port = 3000;
const dbConnect = require('./database/db.js');

dbConnect();

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});