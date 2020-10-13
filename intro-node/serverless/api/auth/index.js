
//middleware (de node): recibe req,res y next
//este middleware se encarga de:
//isAuthenticated: Autenticar que viene un token en la cabecera del request y devolver el 'user'
//hasRole: tomar el 'role' que viene en el request verificar si ese role se encuentra en el arreglo de roles
        //si el role se encuentra entonces ejecutamos la siguiente funcion o middleware
         
const jwt = require('jsonwebtoken')
const users = require('../models/users.js')

const isAuthenticated = (req,res,next) => {
    const token = req.headers.authorization
    if (!token){
        alert('Debe hacer login')
        return res.sendStatus(403)
    }
    jwt.verify(token, 'mi-secreto', (err, decoded) => {
        const { _id } = decoded
        users.findOne({_id })
        .exec()
        .then(user => {
            req.user = user
            next()
        })
    })
}

const hasRoles = roles => (req, res, next) => {
    if (roles.indexOf(req.user.role) > -1) {
        return next()
    }
    res.sendStatus(403)

}

module.exports = {
    isAuthenticated, 
    hasRoles,
}

