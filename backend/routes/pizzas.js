const express = require('express');
const fs = require('fs');
const router = express.Router();
const pizzasPath = './data/pizzas.json';

// Lire pizzas
router.get('/', (req, res) => {
  const pizzas = JSON.parse(fs.readFileSync(pizzasPath));
  res.json(pizzas);
});

// Ajouter une pizza
router.post('/', (req, res) => {
  const pizzas = JSON.parse(fs.readFileSync(pizzasPath));
  const newPizza = { id: Date.now(), ...req.body };
  pizzas.push(newPizza);
  fs.writeFileSync(pizzasPath, JSON.stringify(pizzas, null, 2));
  res.json(newPizza);
});

// Supprimer une pizza
router.delete('/:id', (req, res) => {
  let pizzas = JSON.parse(fs.readFileSync(pizzasPath));
  pizzas = pizzas.filter(pizza => pizza.id != req.params.id);
  fs.writeFileSync(pizzasPath, JSON.stringify(pizzas, null, 2));
  res.json({ message: 'Pizza supprimée' });
});

module.exports = router;
