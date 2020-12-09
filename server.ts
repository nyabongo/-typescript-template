
import express from 'express';
import { Express } from 'express-serve-static-core';

function createServer(): Express {
    const app = express();
    app.disable("x-powered-by");
    app.get('/',(req,res)=>res.send('Express + Typescript server'));
    return app
}

export default {create: createServer};