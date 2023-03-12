import express from 'express'
import {Application} from 'express';
import http from "http";
import {apiRouter} from "./api";
import {StorageService} from "./lib/storage-service";


const app: Application = express();
const server = http.createServer(app);
const port = 8050;

app.use(express.json());
app.use(express.static('public'))

app.use('/api', apiRouter);

server.listen(port, () => {
    StorageService.init();
    console.log(`App listening on ${port}`);
})




