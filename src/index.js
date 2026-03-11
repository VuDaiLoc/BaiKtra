require('dotenv').config();
const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// ─── View engine: EJS, views nằm ngay root của project ───────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..'));   // views = flower_shop_6889464/

// ─── Static files: serve toàn bộ folder gốc (css, images, gif...) ───────────
app.use(express.static(path.join(__dirname, '..')));

// ─── Body parser ─────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Page routes (render EJS) ─────────────────────────────────────────────────
const pageRoutes = require('./routes/page.routes');
app.use('/', pageRoutes);

// ─── API routes ───────────────────────────────────────────────────────────────
const productRoutes = require('./routes/product.routes');
const orderRoutes   = require('./routes/order.routes');
const userRoutes    = require('./routes/user.routes');
app.use('/api/products', productRoutes);
app.use('/api/orders',   orderRoutes);
app.use('/api/users',    userRoutes);

// ─── 404 ──────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).send('<h2>404 - Page Not Found</h2>');
});

app.listen(PORT, () => {
  console.log(`🌸 Flower Shop chạy tại: http://localhost:${PORT}`);
});
