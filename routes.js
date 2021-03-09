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
//routes.post('/receita', recipes.post)


//routes.get('/admin/receita/create' , recipes.create)
//routes.get('/admin/recipes/:id/edit', recipes.edit)

//routes.put('/admin/receita', recipes.put)
//routes.delete('/admin/receita', recipes.delete)

module.exports = routes