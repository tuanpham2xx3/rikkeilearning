import express from 'express';
import productRoutes from './routes/productRoutes.js';

const app = express();

app.use(express.json());

// Gắn router với prefix /api/products
app.use('/api/products', productRoutes);

export default app;
