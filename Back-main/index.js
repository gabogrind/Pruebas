const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json())

const dbConfig = require('./config/dbConfig');

mongoose.connect(dbConfig.urlDatabase)
    .then(db => console.log("db connected"))
    .catch(err => console.error(err))


 
app.use(morgan("dev"));


require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server listen https://backendmisionticsprint6.herokuapp.com:${port}`)
})

app.get('/', (req, res) => {
    res.json({ status: 200 });
})


const routes = require('./routes');

app.use('/productos', routes.productsRouter);
app.use('/ventas', routes.salesRouter);
app.use('/usuarios', routes.usersRouter);
app.use('/auth', routes.authRouter);
