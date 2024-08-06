const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();

const Port = process.env.Port || 5000;

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://CodeWithMaxx:Maxx123@cluster0.2ieev1g.mongodb.net/notesdb').then(()=>{
    app.get('/',(req,res)=>{
        res.send('This is home page');
    });

    const router = require('./router/noteRoute');
    app.use('/notes',router);
});



app.listen(Port,()=>{
    console.log(`API Successfully connected to PORT => ${Port}`);
});