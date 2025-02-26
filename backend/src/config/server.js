const port = 3003;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = server;
