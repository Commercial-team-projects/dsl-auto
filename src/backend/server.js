import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

let items = [
    { id: 1, name: 'Item A', description: 'Description for Item A' },
    { id: 2, name: 'Item B', description: 'Description for Item B' }
];
let nextId = 3;

app.post('/items', (req, res) => {
    const newItem = {
        id: nextId++,
        name: req.body.name,
        description: req.body.description
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.get('/items', (req, res) => {
    res.json(items);
});

app.get('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(i => i.id === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

app.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const itemIndex = items.findIndex(i => i.id === itemId);

    if (itemIndex !== -1) {
        items[itemIndex] = {
            ...items[itemIndex],
            name: req.body.name || items[itemIndex].name,
            description: req.body.description || items[itemIndex].description
        };
        res.json(items[itemIndex]);
    } else {
        res.status(404).send('Item not found');
    }
});

app.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const initialLength = items.length;
    items = items.filter(i => i.id !== itemId);

    if (items.length < initialLength) {
        res.status(204).send();
    } else {
        res.status(404).send('Item not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});