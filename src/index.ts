import dotenv from 'dotenv';
import path from 'path';
import app from './app';

// load env
const result = dotenv.config({ path: path.resolve('.env') });
if (result.error) throw result.error;

// connect
const port = 3000;
app.listen(port, () => console.log(`Example app listening on ${port}!`));
