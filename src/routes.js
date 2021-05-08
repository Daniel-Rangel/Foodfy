const express = require('express')
const routes = express.Router()
const data = require('./data.json')
const recipes = require('./app/controllers/recipes')


routes.get('/',function(req,res){
    const foods = [] 
    for(let food of data.receitas ){
      if(foods.length < 6){
        foods.push(food)
      }
    }
    
    return res.render('index' , {foods})
})
  
routes.get('/sobre', recipes.sobre)
routes.get('/recipes', recipes.receitas)
routes.get('/recipes/:index', recipes.show)

//Recipes
routes.get("/admin/recipes", recipes.index) // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create) // Mostrar formulário de nova receita
routes.post("/admin/recipes", recipes.post) // Cadastrar nova receita
routes.get("/admin/recipes/:id", recipes.show1) // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit) // Mostrar formulário de edição de receita
routes.put("/admin/recipes", recipes.put) // Editar uma receita
routes.delete("/admin/recipes", recipes.delete) // Deletar uma receita

module.exports = routes