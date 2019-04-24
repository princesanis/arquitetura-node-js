const express = require('express')
const hbs = require('hbs')
const path = require('path')
const cotacao = require('./util/cotacao')

const publicAssets = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

const app = express()

app.set('view engine', 'hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialsPath)

app.use(express.static(publicAssets))

app.get('/', (request, response) => {
    response.render('index', {
        title: 'Home',
        author: 'Prince'
    })
})

app.get('/about', (request, response) => {
    response.render('about', {
        title: 'About',
        author: 'Prince'
    })
})

app.get('/help', (request, response) => {
    response.render('help', {
        title: 'Help',
        author: 'Prince'
    })
})

app.get('/cotacoes/:id', (request, response) => {

    const ativo = request.params.id.toUpperCase()

    cotacao(ativo,response)

    // cotacao(ativo, (err, data)=>{
    //     response.status(200).json(pessoa)
    // })
})

app.get('/people/:id', (request, response) => {

    if(request.params.id === '1'){

        const pessoa = {
            name: 'Prince',
            age: '31'
        }
    
        response.status(200).json(pessoa)
    }

    response.status(404).end()
})

const port = 3000

app.listen(3000, () => {
    console.log('Servidor no ar na porta ' + port)
})