import express from 'express';
import fileUpload from 'express-fileupload';
import postsRoutes from './routes/posts.routes.js';
import cors from 'cors';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
// Middelware
app.use(cors());
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}));

// Routes
app.use(postsRoutes);
app.use(express.static(join(__dirname, '../client/build')));


export default app;