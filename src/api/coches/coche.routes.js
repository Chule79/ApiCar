const UserRoutes = require('express').Router()

const {getCoches, postCoche} = require ('./coche.controller')

CocheRoutes.post('/newcoche', postCoche)
CocheRoutes.get('/vercoches', getCoches)

module.exports = CocheRoutes