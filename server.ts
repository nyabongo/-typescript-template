import express from 'express';

function createServer() {
    const app = express();
    app.disable("x-powered-by");
    app.get('/',(req,res)=>res.send('Express + Typescript server'));
    return app
}

export default {create: createServer};