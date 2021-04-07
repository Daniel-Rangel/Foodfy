const { query } = require("express")
const data = require('../data')
const fs = require('fs')

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

exports.post = function(req, res){
    //const keys = Object.keys(req.body)
/* 
    for(key of keys) {
        if(req.body[key] == ""){
            return res.send("por favor, preencha todos os campos")
        }
    }
 */
    //let {} = req.body
    
    console.log(req.body)

    fs.watchFile()

    //return res.redirect('/admin/recipes')
    return res.send(req.body)
}

exports.create = function(req, res){
    return res.render('admin/create')
}