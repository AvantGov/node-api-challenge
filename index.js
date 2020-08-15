// * import depends + data 
const express = require("express")
const body_parser = require("body-parser")
// const project_router = require('./Routers/project_router')
// const action_rouer = require('./Routers/action_router')



// * declaring server
const server = express()
const port = 4000


// * implementing depends
server.use(express.json())
server.use(body_parser)
// server.use(project_router)
// server.use(action_router)

// * launch
server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
