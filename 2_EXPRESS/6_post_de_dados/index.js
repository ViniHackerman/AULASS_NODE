const express = require('express')
const { format } = require('path')
const app = express()

const path = require('path')
const { ppid } = require('process')
const basePath = path.join(__dirname, 'templates')

// Receber informações do Corpo da Requisição
app.use(express.urlencoded ({
    extended: true
}))

//Convereter em objeto
app.use(express.json())


// Utilizar arquivos estáticos como CSS, Imagens e etc
app.use(express.static('public'))

app.post('/usuarios/enviar', (req, res) => {
    const nome = req.body.nome
    const email = req.body.email

    console.log(`
        Usuário: ${nome}
        E-Mail: ${email}
    `)

    res.redirect('/')
})

app.get('/usuarios/cadastrar', (req, res) => {
    res.sendFile(`${basePath}/form.html`)
})

app.get('/usuarios/:id' , (req, res) => {
    const id = req.params.id

    console.log(`Usuário : ${id}`)

    res.sendFile(`${basePath}/usuarios.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(3000)