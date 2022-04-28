const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello from my own real sweet over Smarty Smarty Shoes')
})

const users = [
    { id: 1, name: 'Shabana', email: 'shabana@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shabnur', email: 'shabnur@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchurita', email: 'suchurita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Shakila', email: 'shakila@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Shraboni', email: 'shraboni@gmail.com', phone: '01788888888' },
    { id: 6, name: 'Shahana', email: 'shahana@gmail.com', phone: '01788888888' },
    { id: 7, name: 'Shohana', email: 'shohana@gmail.com', phone: '01788888888' },

]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }

})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
})

app.listen(port, () => {
    console.log('Listening to port', port)
})