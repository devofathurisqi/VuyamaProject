const Router = require('express').Router()

const { productControllers } = require("../controllers")
const { multerUpload } = require('../middleware/multerProduct');

//post
Router.post("/create", productControllers.createProduct)
Router.post("/postProduct", multerUpload.single('file'), productControllers.postProduct)
//get
Router.get("/get", productControllers.getProduct)
Router.get("/getForMobile", productControllers.getProductForMobileOnLandingPage)
Router.get("/collection", productControllers.getProductCollection)
Router.get("/productdetail/:id", productControllers.productDetail)
Router.get("/getproductbyname/:name", productControllers.getProductByName)
Router.get("/getproductbyid/:id", productControllers.getProductById)

//patch
Router.patch("/editproductbyid/:id", multerUpload.single('file'), productControllers.editProductById)

//delete
Router.delete("/deleteproduct/:id", productControllers.deleteProduct)

module.exports = Router

