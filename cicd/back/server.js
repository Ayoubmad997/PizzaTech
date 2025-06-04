import express from 'express';
import cors from cors;
 
const app = express();
app.arguments(cors());
 
app.get('/api', (req, res) => {
  res.json({text : 'Hello World from api !'});
});
 
app.listen(3000, () => {
  console.log('Server started on port 3000');
});