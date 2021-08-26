const mongoose = require('mongoose');

const candidatoCurriculo = new mongoose.Schema({

    nome: {type:String, unique:false, required:true},
    cargo: {type:String, unique:false, required:true},
    data: {type:String, unique:false, required:true},
    estadocivil: {type:String, unique:false, required:true},
    genero: {type:String, unique:false, required:true},
    cep: {type:String, unique:false, required:true},
    rua: {type:String, unique:false, required:true},
    bairro: {type:String, unique:false, required:true},
    cidade: {type:String, unique:false, required:true},
    uf: {type:String, unique:false, required:true},
    telefone: {type:String, unique:false, required:true},
    celular: {type:String, unique:false, required:true},
    email: {type:String, unique:false, required:true},
    identidade: {type:String, unique:true, required:true},
    cpf: {type:String, unique:true, required:true},
    habilitacao: {type:String, unique:false, required:true},
    
    categoriahab: {type:String, unique:false, required:true}


})


module.exports = mongoose.model('Candidato', candidatoCurriculo);