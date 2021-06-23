const cluster = require('cluster')
const crypto = require('crypto')
const express = require('express')
const app = express()
process.env.UV_THREADPOOL_SIZE=1

//Is the file in master mode?
if(cluster.isMaster) {
    //index.js will be executed again in child mode
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
} else {

    //child mode, just a regular server

    const start =  Date.now()

   
    app.get('/', (req, res) => {
        //slow computation
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('This was a slow request')
        })
    })

    app.get('/fast', (req, res) => {
        res.send('This was a fast request')
    })

    app.listen(3000, () => {
        console.log('Listening on port 3000')
    })
}
