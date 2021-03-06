const express = require('express')
const routes = express.Router()
const data = require('./data')
const recipes = require('./controllers/recipes')


routes.get('/',function(req,res){
    const foods = [] 
    for(let food of data ){
      if(foods.length < 6){
        foods.push(food)
      }
    }
  

    return res.render('index' , {foods})
})
  
routes.get('/sobre', recipes.sobre)
routes.get('/receitas', recipes.receitas)
routes.get('/receitas/:index', recipes.show)

//routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
//routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
//routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

//routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
//routes.put("/admin/recipes", recipes.put); // Editar uma receita
//routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes