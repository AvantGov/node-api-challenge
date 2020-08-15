// * importing depends + helpers 
const express = require('express')
const router = express.Router()
const project_access = require('../data/helpers/projectModel')
const action_access = require('../data/helpers/actionModel')


// * get single project by id 
router.get('/', (req, res) => {


})




// * get an action by id
router.get('/:id', (req, res) => {

    
})



// * get sub resource by project id 
router.get('/:id/actions/:action_id', (req, res) => {

    
})


// * add a new project 
router.post('/', (req, res) => {

    
})


// * create new action 
router.post('/:id/actions', (req, res) => {

    
})

// * update a project by id 
router.put('/:id', (req, res) => {

    
})


// * update action by id 
router.put('/:id/actions/:action_id', (req, res) => {

    
})

// * delete a project by id 
router.delete('/:id', (req, res) => {

    
})


// * delete action by id
router.delete('/:id/actions/:action_id', (req, res) => {

    
})

module.exports = router
