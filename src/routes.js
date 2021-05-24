const express = require('express')
const routes = express.Router()
const recipes = require('./app/controllers/recipes')


routes.get('/', recipes.index)
routes.get('/sobre', recipes.on)
routes.get('/recipes', recipes.recipes)
routes.get('/recipes/:index', recipes.recipe)

//Admin Recipes
routes.get("/admin/recipes", recipes.admRecipes) // Mostra a lista de receitas
routes.get("/admin/recipes/create", recipes.admCreateRecipes) // Mostrar formulário de nova receita
routes.post("/admin/recipes", recipes.admPost) // Cadastrar nova receita
routes.get("/admin/recipes/:id", recipes.admRecipe) // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.admEditRecipes) // Mostrar formulário de edição de receita
//routes.put("/admin/recipes", recipes.put) // Editar uma receita
//routes.delete("/admin/recipes", recipes.delete) // Deletar uma receita

module.exports = routes