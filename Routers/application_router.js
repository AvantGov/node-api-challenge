// * importing depends + helpers 
const express = require('express')
const router = express.Router()
const project_access = require('../data/helpers/projectModel')
const action_access = require('../data/helpers/actionModel')
const {     
    validate_action__record,
    validate_action__schema,
    validate_project__record,
    validate_project__schema 
} = require('../utils/middleware/validation_helpers')


// * get single project by id 
router.get('/:id', validate_project__record(), (req, res) => {
    res.status(200).json(req.project)
})



// * get an action by id
router.get('/:id/actions/:actionId', validate_action__record(), (req, res) => {
    res.status(200).json(req.action)
})



// * get sub resources by project id 
router.get('/:id/actions', validate_project__record(), (req, res) => {
    res.status(200).json(req.project.actions)
})


// * add a new project 
router.post('/', validate_project__schema(), (req, res) => {
   console.log(req.body)
    project_access.insert(req.body)
        .then((response) => {
            console.log(response)
            res.status(200).json({ message: 'post successfully added'})
        })
        .catch((error) => {
            res.status(500).json({ message: 'error on the promise response'})
        })
        
})


// * create new action 
router.post('/:id/actions', validate_action__schema(), (req, res) => {
    action_access.insert(req.body)
        .then((response) => {
            console.log(response)
            res.status(200).json({ message: 'comment successfully added'})
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({ message: error})
        })
    
})

// * update a project by id 
router.put('/:id', validate_project__record(), (req, res) => {
    project_access.update(req.params.id, req.body)
        .then((response) => {
            console.log(response)
            res.status(200).json({ message: 'post updated successfully'})
            res.end()
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({ message: error })
        })
})


// * update action by id 
router.put('/actions/:action_id', validate_action__record(), (req, res) => {
    
    action_access.update(req.params.action_id, req.body)
        .then((response) => {
            res.status(200).json({ message: 'action successfully updated' })
        })
        .catch((error) => { 
            console.log('promise response error:', error)
            res.status(500).json({ message: 'service currently unavailable' })
        })
    
})

// * delete a project by id 
router.delete('/:id', validate_project__record(), (req, res) => {
    project_access.remove(req.params.id)
        .then((response) => {
            console.log(response)
            res.status(200).json({ message: 'project deleted'})
        })
        .catch((error) => {
            console.log(error)
            res.status(401).json({ message: 'unable to make request' })
        })
    
})


// * delete action by id
router.delete('/:id/actions/:action_id', (req, res) => {
    action_access.remove(req.params.action_id) 
    .then((response) => {
        console.log(response)
        res.status(200).json({ message: 'action deleted'})
    })
    .catch((error) => {
        console.log(error)
        res.status(403).json({ message: 'unable to make request' })
    }) 
})

module.exports = router
