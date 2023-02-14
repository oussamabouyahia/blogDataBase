// import the database connection
var conn= require('../index.js')


module.exports = {
    // a function which fetches all the posts
      getAll: function (callback) { 
        conn.query('SELECT * FROM posts',function (error, results) {
          callback(error, results);
        })
      
      },
      //a function that retrieves one post record based on the provided id.
      getOne: function(id,callback) {
        const sql=`SELECT * FROM posts WHERE  idposts = ?`
        conn.query(sql,[id],function (error, results) {
          callback(error, results);
        })
      },
      // a function that can be used to insert a post into the database
      add: function (id,title,body,iduser,callback) {
       const sql=`INSERT INTO posts VALUES (?,?,?,?)`
        conn.query(sql,[[id],[title],[body],[iduser]],function (error, results) {
          callback(error, results);
        })
      } 
    };

  