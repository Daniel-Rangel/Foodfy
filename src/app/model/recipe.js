const db = require ('../../config/db');
const { date } = require('../../lib/utils')


module.exports = {
    all(callback){
        const query = `
            SELECT * FROM recipes
        `
        
        db.query(query,function(err, results){
            if(err) throw `Database Error! ${err}`
            callback(results.rows)
        })
    },
    find(id, callback){

        const query = `
            SELECT * 
            FROM recipes 
            WHERE id = $1
        `
        
        db.query(query,[id],function(err, results){
            if(err) throw `Databesa Error ${err}`
            callback(results.rows[0])
        })
    },
    create(data, callback){

        const query = `
            INSERT INTO recipes (
                chef_id,
                image,
                title,
                ingredients,
                preparation,
                information,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6,$7)
            RETURNING id
        `

        console.log(data)
        const values = [
            data.author,
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            data.created_at
        ]
        
        db.query(query, values, function(err , results) {
            if (err) throw `Database error: ${err}`
            callback(results.rows[0])
        })
    },
    update(data, callback) {
        const query = `
            UPDATE recipes SET
                image = ($1),
                title = ($2),
                ingredients = ($3),
                preparation = ($4),
                information = ($5)
            WHERE id = $6
        `

        const values = [
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            data.id
        ]

        db.query(query, values, function(err, results) {
            if (err) throw `Database error: ${err}`

            callback(results.rows[0])
        })
    }
    
}