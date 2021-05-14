const db = require ('../../config/db');

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

        const values = [
            data.author,
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information
        ]

        db.query(query, values, function(err , results) {
            if (err) throw `Database error: ${err}`

            callback(results.rows)
        })
    }
}