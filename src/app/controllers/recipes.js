const { date } = require('../../lib/utils')
const Recipe = require('../model/recipe')

module.exports = {
    Recipes(req, res){
        Recipe.all(function(recipes){
            return res.render('admin/recipes' , {foods : recipes})
        })
    },
    Post(req, res){
        const keys = Object.keys(req.body)
        
        for(key of keys) {
            if(req.body[key] == ""){
                return res.send("por favor, preencha todos os campos")
            }
        }

        const recipes = {
            ...req.body,
            'created_at' : date(Date.now()).iso
        }

        Recipe.create(recipes, (recipes) => {
            return res.redirect(`/admin/recipes/${recipes.id}`)
        })
    },
    Create(req, res){
        return res.render('admin/create')
    },
    Recipe(req, res){
        Recipe.find(req.params.id,function(Recipe){
            
            return res.render('admin/recipe', {food : Recipe} )
        })
    },
    Edit(req, res){
        
        Recipe.find(req.params.id , function(recipes){
            
            return res.render('admin/edit', {food : recipes})
        })
    },
    Put(req, res){
        const keys = Object.keys(req.body)
        
        for(key of keys) {
            if(req.body[key] == ""){
                return res.send("por favor, preencha todos os campos")
            }
        }

        console.log(req.body)

        Recipe.update(req.body, function(recipes){
            return res.redirect(`/admin/recipes/${req.body.id}`)
        })
    },
    Delete(req, res){
        console.log(req.body.id)
        Recipe.delete(req.body.id, function(recipes){
            return res.redirect(`admin/recipes`)
        })
    }
}

/* 
exports.showAdminRecipe = function(req, res){
    const food = data.receitas // Array de receitas carregadas do data.js
    const foodIndex = req.params.id
   
    return res.render('admin/recipe', { 
        food : food[foodIndex], 
        informacao : food[foodIndex].information.replace(/\n/g, '<br>') 
    })
}
 */

/* 
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
} */