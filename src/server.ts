import express from 'express'

const server = express()


// Routing
server.get('/', (req, res) => {
        res.json('Desde Get')
})
server.post('/', (req, res) => {
        res.json('Desde Post')
})
server.put('/', (req, res) => {
        res.json('Desde Put')
})
server.patch('/', (req, res) => {
        res.json('Desde Patch')
})
server.delete('/', (req, res) => {
        res.json('Desde Delete')
})


export default server