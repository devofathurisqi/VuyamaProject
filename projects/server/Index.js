require('dotenv/config');

const express = require("express")
const cors = require("cors")
const PORT = 2000
const db = require("./models")
const path = require('path');

const server = express()
server.use(express.json())
server.use(cors())
server.use('/public', express.static(path.join(__dirname, './public')));

const { productRouters, adminRouters } = require("./routers")
server.use("/product", productRouters)
server.use("/admin", adminRouters)

server.listen(PORT, () => {
    console.log(`Success Running At Port ${PORT}`)
    // db.sequelize.sync({alter:true})
})