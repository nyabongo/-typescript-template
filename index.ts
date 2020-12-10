import server from './server';

const app = server.create();

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})