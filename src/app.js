import express from "express";

const app = express();

const animais = [
    {id: 1, 'nome': 'Almodovar'},
    {id: 2, 'nome': 'Federico'}
]

app.get('/', (req, res) => {
    res.status(200).send('AdotePatinhas')
})

app.get('/animais', (req, res) => {
    res.status(200).json('animais')
})

app.post('/animais', (req, res) => {
    animais.push(req.body);
    res.status(201).send('Animal foi cadastrado com sucesso')
})

export default app