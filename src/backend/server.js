import express from 'express';
import items from './db.json' with { type: 'json' };

  
const app = express();
const PORT = 4000;


app.use(express.json());

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

//returns a list of categories
app.get('/cars/category-list', (req, res) => {
    res.json(items);
});


//will receive the first 5 books from the collection in each category
app.get('/cars/populat-cars', (req, res) => {
    res.json(items);
});

//will receive a collection of 20 books of a certain category
app.get('/cars/category', (req, res) => {
    res.json(items);
});

//will receive complete information about the car
app.get('/cars/{id}', (req, res) => {
    res.json(items);
});




// app.post('/items', (req, res) => {
//     const newItem = {
//         id: nextId++,
//         name: req.body.name,
//         description: req.body.description
//     };
//     items.push(newItem);
//     res.status(201).json(newItem);
// });

// app.put('/items/:id', (req, res) => {
//     const itemId = parseInt(req.params.id);
//     const itemIndex = items.findIndex(i => i.id === itemId);

//     if (itemIndex !== -1) {
//         items[itemIndex] = {
//             ...items[itemIndex],
//             name: req.body.name || items[itemIndex].name,
//             description: req.body.description || items[itemIndex].description
//         };
//         res.json(items[itemIndex]);
//     } else {
//         res.status(404).send('Item not found');
//     }
// });

// app.delete('/items/:id', (req, res) => {
//     const itemId = parseInt(req.params.id);
//     const initialLength = items.length;
//     items = items.filter(i => i.id !== itemId);

//     if (items.length < initialLength) {
//         res.status(204).send();
//     } else {
//         res.status(404).send('Item not found');
//     }
// });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});