import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {

    res.json([
        {
                nome: "Oi",
                codigo: 14,
                catergoria: "Celular",
                preco: 3
        },
        {
                nome: "Vivo",
                codigo: 12,
                catergoria: "celular",
                preco: 4
        },
        {
                nome: "TIm",
                codigo: 15,
                catergoria: "Celular",
                preco: 5
        },
    ])
})






export default router;