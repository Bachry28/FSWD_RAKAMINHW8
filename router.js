var express= require ('express');
var router= express.Router();
var pool = require('./query.js');

router.get('/film/:filmId', (req, res) => {
    const filmId = req.params.filmId;
    pool.query('SELECT * FROM film WHERE film_id = $1', [filmId], (err, result) => {
      if (err) {
        console.error( err);
      }
      res.send(result.rows);
    });
  });

  router.get('/film', (req, res) => {
    pool.query('SELECT * FROM film ', (err, result) => {
      if (err) {
        console.error( err);
      }
      res.send(result.rows);
    });
  });

router.get('/film/category/:categoryid', (req, res) => {
    const categoryid = req.params.categoryid;
    pool.query(
        'SELECT film.* FROM film JOIN film_category ON film.film_id = film_category.film_id WHERE film_category.category_id = $1',
        [categoryid],
        (err, result) => {
          if (err) {
            console.error( err);
          }
          res.send(result.rows);
            
        }
    );
});

  router.get('/category', (req, res) => {
    pool.query('SELECT * FROM category ', (err, result) => {
       if (err) {
        console.error( err);
      }
      res.send(result.rows);
    });
  });

  router.get('/actor', (req, res)=>{
    pool.query('SELECT * FROM actor', (err, result)=>{
      if (err) {
        console.error( err);
      }
      res.send(result.rows);
    });
  });

  
  module.exports = router;
