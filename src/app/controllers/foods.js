const { date } = require('../../lib/utils')
const Recipe = require('../model/recipe')

module.exports = {
    index(req, res){
        const foods = []
        Recipe.all(function(recipes){
 
            for(let food of recipes ){
                if(foods.length < 6){
                    foods.push(food)
                }
            }
            return res.render('index' , {foods : recipes})
        })
    },
    on(req, res){
        return res.render('sobre')
    },
    recipes(req, res){
        Recipe.all(function(Recipes){
            return res.render('receitas', {foods : Recipes})
        })
    },
    recipe(req, res){
        Recipe.find(req.params.index,function(Recipe){
            
            return res.render('receita', {food : Recipe} )
        })
    }
}