import server from './server';

const app = server.create();

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})