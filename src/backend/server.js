import express from 'express';

// import { createHandler } from 'graphql-http/lib/use/express';
// import { buildSchema } from 'graphql';

// import graphqlHTTP from 'express-graphql';
// import schema from './config/schema.js';

import items from './db.json' with { type: 'json' };


import createUsers from './routes/users.js';

// 1. Define your GraphQL Schema
// const schema = buildSchema(`
//   type Query {
//     hello: String
//     user(id: ID!): User
//   }

//   type User {
//     id: ID!
//     name: String
//     email: String
//   }
// `);

// 2. Define your Resolvers
// const root = {
//     hello: () => 'Hello, GraphQL!',
//     user: ({ id }) => {
//         // In a real application, you would fetch this from a database
//         const users = {
//             '1': { id: '1', name: 'Alice', email: 'alice@example.com' },
//             '2': { id: '2', name: 'Bob', email: 'bob@example.com' },
//         };
//         return users[id];
//     },
// };

// 3. Create an Express app
const app = express();
const PORT = 4000;

app.use(express.json());


// 4. Mount the GraphQL handler
// app.all('/graphql', createHandler({
//     schema: schema,
//     rootValue: root,
//     graphiql: true, // Enable the GraphiQL in-browser IDE for testing
// }));

app.use('/api/', createUsers);

// Good API structure
// app.get('/api/products', getProducts);
// app.get('/api/products/:id', getProductById);
// app.get('/api/products/:id/reviews', getProductReviews);
// app.get('/api/users/:userId/orders', getUserOrders);
// app.post('/api/orders', createOrder);

// Filtering and pagination
// app.get('/api/products?category=electronics&sort=price&limit=10&page=2');


// GET all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// GET a single item by ID
app.get('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const item = items.find(item => item.id === id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// POST a new item
app.post('/api/items', (req, res) => {
    const newItem = req.body;
    if (!newItem.name || !newItem.description) {
        return res.status(400).json({ message: 'Name and description are required' });
    }
    newItem.id = String(items.length + 1); // Simple ID generation
    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT (update) an existing item
app.put('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const updatedItemData = req.body;
    const index = items.findIndex(item => item.id === id);

    if (index !== -1) {
        items[index] = { ...items[index], ...updatedItemData, id: id };
        res.json(items[index]);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// DELETE an item
app.delete('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const initialLength = items.length;
    items = items.filter(item => item.id !== id);

    if (items.length < initialLength) {
        res.status(204).send(); // No Content
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});


//returns a list of categories
app.get('/cars/category-list', (req, res) => {
    res.json(items);
});


//will receive the first 5 popular from the collection in each category
app.get('/cars/popular-cars', (req, res) => {
    res.json(items);
});

//will receive a collection of 20 cars of a certain category
app.get('/cars/category', (req, res) => {
    res.json(items);
});

//will receive complete information about the car
app.get('/cars/{id}', (req, res) => {
    res.json(items);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});