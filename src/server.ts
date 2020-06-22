import express, { request, response } from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
// query sao parametros de rota geralmente opcionais
// reques body sao parametros criação e atualizacao de usuarios

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


//rota das imagens
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));





app.listen(3333);