const db = require ('../../config/db')

module.exports = {
    all(callback){
        const query = `
            SELECT * FROM chefs
        `
    
        db.query(query,function(err, results){
            if(err) throw `Database Error! ${err}`
            callback(results.rows)
        })
    },
    find(id, callback){
        const query = `
            SELECT * 
            FROM chefs 
            WHERE id = $1
        `
        
        db.query(query,[id],function(err, results){
            if(err) throw `Databesa Error ${err}`
            callback(results.rows[0])
        })
    },
    create(data, callback){
        const query = `
            INSERT INTO chefs (
                name,
                avatar_url,
                created_at
            ) VALUES ($1, $2, $3)
            RETURNING id
        `

        const values = [
            data.name,
            data.avatar_url,
            data.created_at
        ]

        db.query(query, values, function(err , results){
            if (err) throw `Database error: ${err}`

            return callback(results.rows[0])
        })
    },
    update(data, callback){
        const query = `
            UPDATE chefs SET
                name = ($1),
                avatar_url = ($2)
            WHERE id = ($3)
        `

        const values = [
            data.name,
            data.avatar_url,
            data.id
        ]

        db.query(query, values, function(err,results){
            if (err) throw `Database error: ${err}`
            return callback(results.rows[0])
        })
    }
}