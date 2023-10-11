const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

//CONFIGURANDO O HANDLEBARS COMO TEMPLATE ENGINE
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


//ROTAS

app.get('/post', (req, res) => {
    const post = 
    {
        title: "Aprender Node.js",
        category: "JavaScrip",
        body: "Este artigo vai te ajudar a aprender Node.js",
        comments: 13
    }

    res.render('post', { post })
})

app.get('/dashboard', (req, res) => {
    const items = ['Palmeriras', 'Vasco', 'Coritiba']

    res.render('dashboard', { items })
})

app.get('/', (req, res) => {
    const usuario = 
    {
        nome: "Vinicius",
        profissao: "Desempregado",
        idade: "19"
    }

    const auth = true

    res.render('home', { usuario, auth })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})