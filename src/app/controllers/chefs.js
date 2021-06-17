const { date } = require('../../lib/utils')
const Chef = require('../model/chef')

module.exports = {
    all(req, res){
        
    },
    Chef(req,res){
        Chef.find(req.params.id , (Chef)=>{
            return res.render('admin/chefs/chef' , {Chef})
        })
    },
    Create(req,res){
        return res.render('admin/chefs/create')
    },
    Post(req, res) {
        const keys = Object.keys(req.body)
        
        for(key of keys) {
            if(req.body[key] == ""){
                return res.send("por favor, preencha todos os campos")
            }
        }

        const chefs = {
            ...req.body,
            'created_at' : date(Date.now()).iso
        }
        
        Chef.create(chefs , (chef)=>{
            return res.redirect(`admin/chefs/${chef.id}`)
        })
    },
    Edit(req,res){
        Chef.find(req.params.id, function(Chefs){
            return res.render(`admin/chefs/edit`, {Chefs})
        })
    }
}