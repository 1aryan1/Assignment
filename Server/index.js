const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const MONGO_URL = 'mongodb+srv://13aryansharma1030:HELLOWORLD@cluster0.0wqa4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose
.connect(MONGO_URL)
.then (()=>{
 console.log("DB connected")
});

const playerRoutes = require('./routes/players');
const teamRoutes = require('./routes/teams');

app.use('/players', playerRoutes);
app.use('/teams', teamRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

