const db = require("../models")
const { Op } = require("sequelize")

module.exports = {
    createProduct: async (req, res) => {
        try {
            const { price, name, image } = req.body
            if (!price || !name || !image) throw "field column is required"
            await db.Products.create({
                price,
                name,
                image
            })
            res.status(201).send("product created!")
        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    },
    getProduct: async (req, res) => {
        try {
            const response = await db.Products.findAll()
            res.status(201).send(response)
        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    },
    getProductForMobileOnLandingPage: async (req, res) => {
        try {
            const response = await db.Products.findAll({
                attributes: ['image', 'name'],
                limit: 4,
                offset: 0,
                order: [['createdAt', 'DESC']]
            })
            res.status(201).send(response)
        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    },
    getProductCollection: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 0
            const limit = parseInt(req.query.limit) || 10
            const search = req.query.search_query || ""
            const category = req.query.category || ""
            const offset = limit * page

            const totalRows = await db.Products.count({
                where: {
                    [Op.or]: [{
                        name: {
                            [Op.like]: '%' + search + '%'
                        }
                    }, {
                        price: {
                            [Op.like]: '%' + search + '%'
                        }
                    }, {
                        category: {
                            [Op.like]: '%' + search + '%'
                        }
                    }]

                }
            })

            const totalRowswithoutSearch = await db.Products.count({
                where: {
                    category: category
                }
            })
            // console.log(totalRowswithoutSearch)

            const totalPage = Math.ceil(totalRows / limit)
            const totalPageWithoutSearch = Math.ceil(totalRowswithoutSearch / limit)

            const result = await db.Products.findAll({
                where: {
                    [Op.or]: [{
                        name: {
                            [Op.like]: '%' + search + '%'
                        }
                    }, {
                        price: {
                            [Op.like]: '%' + search + '%'
                        }
                    }, {
                        category: {
                            [Op.like]: '%' + search + '%'
                        }
                    }]
                },
                offset: offset,
                limit: limit,
            })

            const resultWithoutSearch = await db.Products.findAll({
                where: {
                    category: category
                },
                offset: offset,
                limit: limit,
            })

            res.status(201).send({
                result: category === "" ? result : resultWithoutSearch,
                page: page,
                limit: limit,
                totalRows: category === "" ? totalRows : totalRowswithoutSearch,
                totalPage: category === "" ? totalPage : totalPageWithoutSearch
            })
        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    },
    productDetail: async (req, res) => {
        try {
            const { id } = req.params

            const Products = await db.Products.findAll({
                attributes: ['name', 'id', 'description', 'image', 'category', 'price'],
                where: {
                    id: id,
                },
            })

            const checkId = await db.Products.findAll({
                attributes: ['id']
            })
            const resultCheckId = checkId.map(obj => obj.id)

            res.status(201).send({
                Products: Products,
                checkId: resultCheckId
            })

        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    },
    postProduct: async (req, res) => {
        try {
            const { price, name, category, description } = req.body
            const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp']


            if (!req.file) {
                return res.status(401).send("Picture is required")
            }

            if (!allowedTypes.includes(req.file.mimetype)) {
                return res.status(401).send("Invalid file type. Only JPG, JPEG, WEBP and PNG are allowed.")
            }

            if (!price) throw "price is required"
            if (!name) throw "name is required"
            if (!category) throw "category is required"
            if (!description) throw "description is required"

            await db.Products.create({
                image: req.file.filename,
                price: price,
                name: name,
                category: category,
                description: description
            })

            res.status(201).send("product created!")
        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    },
    getProductByName: async (req, res) => {
        try {

            const response = await db.Products.findAll({
                where: {
                    name: {
                        [Op.like]: '%' + req.params.name + '%'
                    }
                },
                // offset: 0,
                // limit: 5,
                raw: true
            })
            res.status(201).send(response)
        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    },
    getProductById: async (req, res) => {
        try {
            const response = await db.Products.findOne({
                where: {
                    id: req.params.id
                },
                raw: true
            })
            res.status(201).send(response)
        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    },
    editProductById: async (req, res) => {
        try {
            const { name, category, price, description } = req.body
            const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp']
            // console.log(name)

            if (!name) throw "Name is required"
            if (!category) throw "Category is required"
            if (!price) throw "Price is required"
            if (!description) throw "description is required"

            if (!req.file) {
                return res.status(401).send("Picture is required")
            }


            if (!allowedTypes.includes(req.file.mimetype)) {
                return res.status(401).send("Invalid file type. Only JPG, JPEG, WEBP and PNG are allowed.")
            }
            await db.Products.update({
                name: name,
                image: req.file.filename,
                description: description,
                category: category,
                price: price
            }, {
                where: {
                    id: req.params.id
                }
            })
            res.status(201).send("Product updated")
        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    },
    deleteProduct: async (req, res) => {
        try {
            await db.Products.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(201).send("Delete Product!")
        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    }
}