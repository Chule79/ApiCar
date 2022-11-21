const CocheRoutes = require('express').Router()

const { isAuth } = require("../../middlewares/auth")
const {getCoches, postCoche} = require ('./coche.controller')

CocheRoutes.post('/', [isAuth], postCoche)
CocheRoutes.get('/', [isAuth], getCoches)



module.exports = CocheRoutes