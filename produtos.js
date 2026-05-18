import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
    res.json([
        {nome: "Hiago", idade: "21"},
        {nome: "Ricardo", idade: "21"}
    ])
})

export default router;