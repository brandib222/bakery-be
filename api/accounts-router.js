// implement your posts router here

const express = require('express')

const router = express.Router()

module.exports = router

// data access functions
const Post = require('./posts-model')

// THIS IS WHERE WE MAKE ENDPOINTS
// use option + command + up arrow to write multiple lines at once


router.get('/', (req, res) => {
    Post.find()
    .then(found => {
        //"throw new Error('ouch')" to check that error code is working like a console.log()
        res.json(found)
    }).catch(err => {
        res.status(500).json({
            message: 'The posts information could not be retrieved',
            err: err.message,
            stack: err.stack
        })
    })
})

