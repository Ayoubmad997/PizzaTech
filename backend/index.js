
import express from "express";

const app = express();


app.get("/api/hello", (_, res) => res.json({ message: "Hello, world !" }));

if (process.env.NODE_ENV !== 'test') {  app.listen(5000, () => console.log("API sur :5000"));}

export default app;

