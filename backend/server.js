const express = require('express');
const cors = require('cors');
const app = express();
const pizzaRoutes = require('./routes/pizzas');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API PizzaTech 🍕 !');
});  

app.use('/api/pizzas', pizzaRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));
