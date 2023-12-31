const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!')
})

const authRoutes = require('./routes/auth');
const tradeRoutes = require('./routes/trade');
const bookRoutes = require('./routes/book');
const counterpartyRoutes = require('./routes/counterparty');
const securityRoutes = require('./routes/security');

app.use('/auth', authRoutes);
app.use('/trade', tradeRoutes);
app.use('/book', bookRoutes);
app.use('/counterparty', counterpartyRoutes);
app.use('/security', securityRoutes);


app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.statusCode = 404;
    next(err);
})

app.use((err, req, res, next) => {
    console.log(err);
    const status = err.statusCode || 500;
    const message = err.message;
    res.status(status).json({ message: message });
})

mongoose.connect('mongodb+srv://rishikapatwa2002:DBnew2023@cluster0.pyvxnys.mongodb.net/?retryWrites=true&w=majority',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(result => {
        app.listen(process.env.PORT || 5000, () => {
            console.log("Server started at port 5000");
        });
        console.log("http://localhost:5000");
    })
    .catch(err => {
        console.log(err);
    })

// https://localhost:5000/auth/login -> post
// https://localhost:5000/auth/signup -> put