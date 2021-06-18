const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80
app.use(express.static(path.resolve(__dirname,'./Public')));

app.listen(PORT,() => console.log('Servidor corriendo en puerto 3000'));

app.get('/',(req,res)=> {
    res.sendFile(path.resolve(__dirname,'./Views/home.html'));
});
app.get('/registrar',(req,res)=> {
    res.sendFile(path.resolve(__dirname,'./Views/registrar.html'));
});

