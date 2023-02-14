// import the database connection
var conn= require('../index.js')

module.exports = {
    //a function which fetches all the users.
    getAll: function (callback) {
      const sql = 'SELECT * FROM users'
      conn.query(sql, function (error, results) {
        callback(error, results);
      });
    },
      //a function that retrieves one user record based on the provided id.
      getOne: function(id,callback) {
        const sql=`SELECT * FROM users WHERE  iduser = ?`
        conn.query(sql,[id],function (error, results) {
          callback(error, results);
        })
      },
      // a function that can be used to add a user to the users table.
      add: function (iduser,username,userPosts,callback) {
        const sql=`INSERT INTO users VALUES (?,?,?)`
        conn.query(sql,[[iduser],[username],[userPosts]],function (error, results) {
          callback(error, results);
        })
       } 
    };

    