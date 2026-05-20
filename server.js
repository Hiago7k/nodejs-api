import express, { application } from 'express';
const app = express();
const port = 3000;
import  cors from 'cors';


app.use(cors());
// middleware par ajson
app.use(express.json());

// importa os roteadores da aplicacao
import usersRouter from './produtos.js';
import operadoras from './operadoras.js';

// monta as rotas
app.use('/api/produtos', usersRouter); 
app.use('/api/operadoras', operadoras);

// rota teste 
app.get('/', (req, res) =>{
    res.send('Servidor on');
})



// tratamento generico de erro
app.use((err, req, res, next) => {
    console.log(err);

    res.status(500).json({
        erro: 'Erro interno do servidor'
    });
});


app.listen(port, () => {
    console.log(`Servidor on na porta ${port}`);
})

