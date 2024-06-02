import express from "express";
import cors from "cors";
import productRouter from "./routes/products.routes.js"; // Import the product router

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Define a simple route for the root path
app.get("/", (req, res) => {
    res.send("Backend of Afford");
});

// Use the product routes with a base path
app.use("/api", productRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
