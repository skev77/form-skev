const fs = require('fs');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8888;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    console.log("Required GET");
    res.render('form', { resultado: '' });
});

app.get("/formulario", (req, res) => {
    nome = req.body.nome;
    sobrenome = req.body.sobrenome;
    rg = req.body.rg;
    rua = req.body.rua;
    numero = req.body.numero;
    bairro = req.body.bairro;
    cidade = req.body.cidade;
    login = req.body.login;
    senha = req.body.senha;
    esporte = req.body.esporte;
    aniversario = req.body.aniversario;
    email = req.body.email;
    email2 = email + ".txt";
    if (fs.existsSync(email2)) {
        const archiveBuff = fs.readFileSync(email2);
        console.log(archiveBuff);
        const readArchive = archiveBuff.toString();
        console.log(readArchive);
        const JSUN = JSON.parse(readArchive);
        console.log(JSUN);
        res.render('form', JSUN);
    } else {
        res.render('form', { resultado: '' })
    }
})

app.post("/formulario", (req, res) => {
    nome = req.body.nome;
    sobrenome = req.body.sobrenome;
    rg = req.body.rg;
    rua = req.body.rua;
    numero = req.body.numero;
    bairro = req.body.bairro;
    cidade = req.body.cidade;
    login = req.body.login;
    senha = req.body.senha;
    esporte = req.body.esporte;
    aniversario = req.body.aniversario;
    email = req.body.email;
    email2 = email + ".txt";
    const saveDB = {
        nome: nome, sobrenome: sobrenome, rg: rg, rua: rua,
        numero: numero, bairro: bairro, cidade: cidade, login: login,
        senha: senha, esporte: esporte, aniversario: aniversario, email: email
    };
    console.log(saveDB);
    fs.writeFileSync(email2, JSON.stringify(saveDB));
    res.render('form', saveDB);
});

app.listen(PORT, () => {
    console.log('listen http://localhost:8888 || ' + PORT);
})