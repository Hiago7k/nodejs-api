import express from 'express';

const router = express.Router();

const produtos = [
    {
        nome: "Hiago",
        telefone: "9999-1111",
        data: "2015-04-12T12:53:46.2042",
    },
    {  nome: "Ricardo",
            telefone: "2329-1246",
            data: "2016-02-12T12:53:46.2041",},
    {
         nome: "Jose",
            telefone: "2342-2575",
            data: "2026-11-12T12:33:10.2050",
    },
];


router.get('/', (req, res) => {
       res.json(produtos);
});


router.post('/', (req, res) => {
    produtos.push(req.body);


    res.status(201).json(req.body);
})

export default router;