// * import depends + data 
const express = require("express")
const body_parser = require("body-parser")
const application_router = require('./Routers/application_router')



// * declaring server
const server = express()
const port = 8080


// * implementing depends
server.use(express.json())
server.use(body_parser)
server.use(application_router)

// * launch
server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
