const { Op } = require("sequelize")
const db = require("../models")

module.exports = {
    loginAdmin: async (req, res) => {
        try {
            const { username, password } = req.body
            
            if (!username) throw "Tolong masukan username anda"
            if (!password) throw "Tolong masukan password anda"

            const checkAdmin = await db.Admin.findOne({
                where: {
                    [Op.and]: [
                        { username },
                        { password }
                    ]
                }
            })

            if (!checkAdmin) throw "Username atau Password salah!"
            res.status(201).send("Login success!")
        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    }
}