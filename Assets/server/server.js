const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const { connect } = require('http2');
const { MongoClient } = require('mongodb');
const swaggerUi = require('swagger-ui-express');



mongoose.connect('mongodb+srv://HugoBarros:brasileiro.2@cluster0.mtadm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
useNewUrlParser: true, 
useCreateIndex: true 
});





app.use(bodyParser.urlencoded({extended:true}));

console.log('conectado');

fs.access('../data/items.json', fs.constants.F_OK, (err) => {
    console.log(err ? 'Arquivo items.json não existe' : '');
});


const readFile = () => {
    const atual = fs.readFileSync('../data/items.json', 'utf-8');
    return atual == '' ? [] : JSON.parse(atual);
}

const writeFile = (arrayElemet) => {
    const currentData = readFile();
    currentData.push(arrayElemet);
    const updateFile = JSON.stringify(currentData);
    fs.writeFileSync('../data/items.json', updateFile,'utf-8')
}

app.post('/',(req, resp) => {
    
    writeFile(req.body);
    console.log(req.body);
    resp.send('<h1>curriculo enviado</h1>');  
});
  
app.get('/getAtributes', (req,resp)=>{
    resp.send(readFile()); 
})

app.use('/docs' ,swaggerUi.serve, swaggerUi.setup(swaggerDocs) );






app.listen(3003);

