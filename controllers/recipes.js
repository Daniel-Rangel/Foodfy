const { query } = require("express")
const data = require('../data')

exports.sobre = function(req, res){
    return res.render('sobre')
}

exports.receitas = function(req, res){
    return res.render('receitas', {foods : data })
}

exports.create = function(req, res){
    return res.render('admin/create')
}

exports.post = function(req, res){
    
    return res.send('foi')
}

exports.show = function(req, res) {
    const food = data // Array de receitas carregadas do data.js
    const foodIndex = req.params.index
    
    return res.render('receita', { 
        food : food[foodIndex], 
        informacao : food[foodIndex].information.replace(/\n/g, '<br>') 
    } )
}