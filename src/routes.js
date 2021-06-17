const express = require('express')
const routes = express.Router()

const chefs = require('./app/controllers/chefs')
const foods = require('./app/controllers/foods')
const recipes = require('./app/controllers/recipes')

//foods
routes.get('/', foods.index)
routes.get('/sobre', foods.on)
routes.get('/recipes', foods.recipes)
routes.get('/recipes/:index', foods.recipe)

//Recipes
routes.get("/admin/recipes", recipes.Recipes) // Mostra a lista de receitas
routes.get("/admin/recipes/create", recipes.Create) // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.Recipe) // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.Edit) // Mostrar formulário de edição de receita
routes.post("/admin/recipes", recipes.Post) // Cadastrar nova receita
routes.put("/admin/recipes", recipes.Put) // Editar uma receita
routes.delete("/admin/recipes", recipes.Delete) // Deletar uma receita

//Chef
//routes.get("/admin/chefs", chefs.all)
routes.get("/admin/chefs/create", chefs.Create)
routes.get("/admin/chefs/:id" , chefs.Chef)
routes.post('/admin/chefs', chefs.Post)
routes.get("/admin/chefs/:id/edit" , chefs.Edit)

module.exports = routes