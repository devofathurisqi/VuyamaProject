const Router = require('express').Router()

const { adminControllers } = require("../controllers")


//post
Router.post("/login", adminControllers.loginAdmin)

module.exports = Router

