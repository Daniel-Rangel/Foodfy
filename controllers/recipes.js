const { query } = require("express")
const data = require('../data')

exports.sobre = function(req, res){
    return res.render('sobre')
}

exports.receitas = function(req, res){
    return res.render('receitas', {foods : data })
}

exports.show = function(req, res) {
    const food = data // Array de receitas carregadas do data.js
    const foodIndex = req.params.index
    
    return res.render('receita', { 
        food : food[foodIndex], 
        informacao : food[foodIndex].information.replace(/\n/g, '<br>') 
    } )
}

// admin
exports.index = function(req, res) {
    const foods = data
    let id = 0

    for(food of foods){
        food.id = id++
    }

    return res.render('admin/recipes' , {foods : data} )
}

exports.show1 = function(req, res) {
    const food = data // Array de receitas carregadas do data.js
    const foodIndex = req.params.id
   
    return res.render('admin/recipe', { 
        food : food[foodIndex], 
        informacao : food[foodIndex].information.replace(/\n/g, '<br>') 
    })
}

exports.admin = function (req, res){

    return res.render('admin/admin')
}

exports.post = function(req, res){

    const keys = Object.keys() 

    console.log("asdasd")

    return res.send(req.body)
}

exports.create = function(req, res){
    return res.render('admin/create')
}