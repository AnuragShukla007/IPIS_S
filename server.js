const server = require('express')();
const http = require('http').Server(server);
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://abhay2001srivastav:vKI9ThjCU2EW2QCN@cluster0.cilep9i.mongodb.net/?retryWrites=true&w=majority")

const User = require('./models/userModels');

async function insert()
{
    await User.create({
        name: 'Abhay',
        email: 'abhay@jmv'
    });
}
insert();

http.listen(8000, function(){
    console.log('server is running');

})