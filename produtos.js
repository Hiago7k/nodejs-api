import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
    res.json([
       {
        nome: "Hiago",
        telefone: "9999-1111",
        data: "2015-04-12T12:53:46.2042",
        operadora: {
            nome: "Oi",
            codigo: 14,
            catergoria: "Celular",
        }
       },
       {
        nome: "Ricardo",
        telefone: "2329-1246",
        data: "2016-02-12T12:53:46.2041",
        operadora: {
            nome: "Vivo",
            codigo: 12,
            catergoria: "celular",
        }

       },
       {
        nome: "Jose",
        telefone: "2342-2575",
        data: "2026-11-12T12:33:10.2050",
        operadora: {
            nome: "TIm",
            codigo: 15,
            catergoria: "Celular"
        }
       },
    ]);
});

export default router;