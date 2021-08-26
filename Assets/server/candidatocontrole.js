const candidatoCurriculo = require('../server/candidato');


module.exports = {
     async register(req, res) {

            const{ nome, cargo, data, estadocivil, genero, cep,rua,bairro,cidade,uf,telefone,celular,email, identidade, cpf, habilitacao, categoriahab} = req.body;

            const newcandidatoCurriculo = new candidatoCurriculo();


                newcandidatoCurriculo.nome = nome;
                newcandidatoCurriculo.cargo = cargo; 
                newcandidatoCurriculo.data = data; 
                newcandidatoCurriculo.estadocivil= estadocivil; 
                newcandidatoCurriculo.genero = genero; 
                newcandidatoCurriculo.cep = cepi; 
                newcandidatoCurriculo.rua = rua; 
                newcandidatoCurriculo.bairro = bairro; 
                newcandidatoCurriculo.cidade = cidade; 
                newcandidatoCurriculo.uf = uf; 
                newcandidatoCurriculo.telefone = telefone; 
                newcandidatoCurriculo.celular = celular; 
                newcandidatoCurriculo.email = email; 
                newcandidatoCurriculo.identidade = identidade;
                newcandidatoCurriculo.cpf = cpf;  
                newcandidatoCurriculo.habilitacao = habilitacao;
                newcandidatoCurriculo.categoriahab = categoriahab;


            newcandidatoCurriculo.save((err, savedcandidatoCurriculo)=>{
                if (err) {
                    console.log(err);
                    return res.status(500).send('ERRO');
                }

                return res.status(200).send(savedCandidate);
            })

        }




                
        
     }
