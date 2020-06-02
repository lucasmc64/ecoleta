import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários.');

    response.json([
        'Olá Mundo!',
        'Hello World!'
    ]);
})

app.listen(3333)