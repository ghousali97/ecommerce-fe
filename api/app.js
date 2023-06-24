const express = require('express');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');
const stripeRoutes = require('./routes/stripe');
const cors = require('cors');

const db = require('./utils/db');
//const { isAuthenticated, isAdmin } = require('./middleware/isAuthenticated');
const port = 3000 || process.env.PORT;


const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/checkout', stripeRoutes);
app.listen(port, () => {
    console.log("Server running on: " + port);
})

app.get("/", (req, res) => {

    res.json({ message: "Hello world!" })
});

//app.get('/verifyToken', isAuthenticated, (req, res) => {
  //  res.status(200).json({ message: req.user });
//})

//    app.get('/verifyAdmin', isAdmin, (req, res) => {
  //      res.status(200).json({ message: req.user });
    //})


