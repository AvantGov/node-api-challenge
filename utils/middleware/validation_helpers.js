const project_access = require('../../data/helpers/projectModel')
const action_access = require('../../data/helpers/actionModel')

// ! projects: 
// ! name
// ! description 
// ! if project exists 

const validate_project__schema = () => {
    return (req, res, next) => {
        if (!req.body.name) {
            res.status(400).json({ message: 'please add title' })
            // res.end()
        } else if (!req.body.description) {
            res.status(400).json({ message: 'please add description' })
            // res.end()
        } else {
            next()
        }

    }
}

const validate_project__record = () => {
    return (req, res, next) => {
        project_access.get(req.params.id)
            .then((response) => {
                const project = response
                if (!project) {
                    res.status(404).json({ message: 'project unavailable or does not exist' })
                    // res.end()
                } else {
                    req.project = response
                    next()
                }
            })
            .catch((error) => {
                console.log('validate project promise error:', error)
                res.status(503).json({ message: 'service currently unavailable' })
            })
    }
}



// ! actions
// ! description (less than 128)
// ! notes 
// ! project id 

const validate_action__schema = () => {
    return (req, res, next) => {
        if (!req.body.description) {
            res.status(400).json({ message: 'please add action title' })
            // res.end()
        } 
        // else if (req.body.description.length() > 128) {
        //     res.status(400).json({ message: 'action description cannot exceed 128 characters' })
        //     end()
        // }
        else if (!req.body.notes) {
            res.status(400).json({ message: 'please add action notes' })
            // res.end()
        }
        // else if (!req.body.project_id) {
        //     res.status(400).json({ message: 'please associate project with record' })
        // } 
        else {
            next()
        }
    }
}

const validate_action__record = () => {
    return (req, res, next) => {
        action_access.get(req.params.actionId)
            .then((response) => {
                const action = response
                // ? action.project_id !== req.params.actionId
                if (!action) {
                    res.status(404).json({ message: 'action unavailable or unable to be found' })
                } else {
                    req.action = response
                    next()
                }
            })
            .catch((error) => {
                console.log('validate action promise error:', error)
                res.status(503).json({ message: 'service currently unavailable' })
            })
    }
}


module.exports = {
    validate_action__record,
    validate_action__schema,
    validate_project__record,
    validate_project__schema
}