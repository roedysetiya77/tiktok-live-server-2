const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { connect } = require('tiktok-live-connector');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.get('/healthz', (req,res) => res.send('ok'));

const io = new Server(server, { cors: { origin: process.env.ALLOWED_ORIGIN || '*' } });
// (tambahkan logic tiktok-live-connector & socket handlers di sini)

server.listen(port, ()=> console.log('Listening on', port));
