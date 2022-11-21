const Coche = require("./coche.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { setError } = require("../../helpers/error/handle.error");


const getCoches = async (req, res, next) => {
  try {
    const coches = await Coche.find()
    return res.json({
      status:200,
      message:'Recover all Coches',
      data:{coches}
    })
  } catch (error) {
    return next(setError(500, 'Fail to recover coches'))
  }
}

const postCoche = async (req, res, next) => {
  try {
    const newCoche = new Coche(req.body)
    const newCocheInDB = await newCoche.save()

    return res.json({
      status:200,
      message:'Created Coche',
      data:{newCocheInDB}
    })
  } catch (error) {
    
  }
}

module.exports = {getCoches, postCoche}