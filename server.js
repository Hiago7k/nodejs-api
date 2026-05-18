const express = require('express')
const app = express()
const port = 3000;


app.get('/', (req, res) =>{
    res.send('Criando um servidor em expresscs');
})

app.listen(port, () => {
    console.log(`Server on in port ${port}`);
})