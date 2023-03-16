import express from 'express';

const app = express();

// route
app.get('/', (req, res) => res.send('Hello World'));
app.get('/home', (req, res) => res.send('Home page'));

export default app;
