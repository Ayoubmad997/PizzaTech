import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Tableau plus simple que une base de données
let pizzas = [
  { id: 1, name: "Margherita", ingredients: ["tomate", "mozzarella"], price: 8.5 },
  { id: 2, name: "Reine", ingredients: ["jambon", "champignons", "mozzarella"], price: 10.0 },
];


app.get('/api', (req, res) => {
  res.json({ text: 'Hello World from api !' });
});

app.get('/api/pizzas', (req, res) => {
  res.json(pizzas);
});

app.post('/api/pizzas', (req, res) => {
  const newPizza = { ...req.body, id: Date.now() };
  pizzas.push(newPizza);
  res.status(201).json(newPizza);
});


app.delete('/api/pizzas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  pizzas = pizzas.filter(p => p.id !== id);
  res.status(204).end();
});

// Lancer le serveur
app.listen(3000, () => {
  console.log('✅ Serveur lancé sur http://localhost:3000');
});
