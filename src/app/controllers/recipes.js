const { query } = require("express")
const fs = require('fs')
const Recipe = require('../model/recipe')

module.exports = {
    about(req, res){
        return res.render('sobre')
    },
    recipes(req, res){
        return res.render('receitas', {foods : Recipe})
    },
    show(req, res){
        return res.render('receita', {foods})
    },
    index(req, res){
        return res. render('admin/recipes', {foods})
    }
}
/* 
exports.sobre = function(req, res){
    return res.render('sobre')
}

exports.receitas = function(req, res){
    return res.render('receitas', {foods : data.receitas })
}


exports.show = function(req, res){
    const food = data.receitas // Array de receitas carregadas do data.js
    const foodIndex = req.params.index
    
    return res.render('receita', { 
        food : food[foodIndex], 
        informacao : food[foodIndex].information.replace(/\n/g, '<br>') 
    } )
}

// admin
exports.index = function(req, res){
    return res.render('admin/recipes' , {foods : data.receitas} )
}

 */


exports.show1 = function(req, res){
    const food = data.receitas // Array de receitas carregadas do data.js
    const foodIndex = req.params.id
   
    return res.render('admin/recipe', { 
        food : food[foodIndex], 
        informacao : food[foodIndex].information.replace(/\n/g, '<br>') 
    })
}

exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == ""){
            return res.send("por favor, preencha todos os campos")
        }
    }

    let {
        image,
        title,
        author,
        ingredients,
        preparation,
        information
    } = req.body

    let id = 1
    const latrecipes = data.receitas[data.receitas.length - 1]
    if(latrecipes){
        id = latrecipes.id + 1
    }

    data.receitas.push({
        id,
        image,
        title,
        author,
        ingredients,
        preparation,
        information
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('erro ao requisitar dados')

        return res.redirect(`/admin/recipes`)
    })

}

exports.create = function(req, res){
    return res.render('admin/create')
}

exports.edit = function(req, res){
    const { id } = req.params

    const foundRecipe = data.receitas.find((recipe) => {
        return recipe.id == id
    })

    if(!foundRecipe) return res.send('Recipe not foud')

    const food = {
        ...foundRecipe
    }

    return res.render('admin/edit', {food})
}

exports.put = function(req, res){
    const { id } = req.body
    let index = 0

    const foundRecipe = data.receitas.find(function(recipe, foundIndex){
        if(id == recipe.id){
            index = foundIndex
            return true
        }
    })

    if(!foundRecipe) return res.send("Recipe not found")

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id)
    }

    data.receitas[index] = recipe

    fs.writeFile('data.json', JSON.stringify(data,null,2) , function(err){
        if(err) return res.send('write error')
    })

    res.redirect(`/admin/recipes/${id}`)
}

exports.delete = (req, res) => {
    const { id } = req.body

    const filteredRecipes = data.receitas.filter((recipes)=>{
        return recipes.id != id
    })

    data.receitas = filteredRecipes

    fs.writeFile('data.json', JSON.stringify(data,null,2), (err)=>{
        if(err) return res.send('write error')
    })

    res.redirect(`/admin/recipes`)
}