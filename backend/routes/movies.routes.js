const express = require('express');
const router  = express.Router();
const moviesController = require('../controllers/movies.controllers');

router.post('/v1/api/add', moviesController.addMovie); 
router.get('/v1/api/allmovies', moviesController.getAllMovies);
router.delete('/v1/api/delete/:id', moviesController.deleteMovie);
router.put('/v1/api/update/:id', moviesController.updateMOvie);
router.get('/v1/api/movie/:id', moviesController.getSpecificMovie);

module.exports = router;

