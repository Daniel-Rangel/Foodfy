const db = require ('../../config/db');

module.exports = {
    all(callback){
        const query = `
            SELECT * FROM recipes
        `
        
        db.query(query,function(err, result){
            if(err) throw `Database Error! ${err}`
            callback(result.rows)
        })
    }
}