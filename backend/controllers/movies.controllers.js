//The application logic

//Get all movies API
const Movies = require('../models/movie');

exports.getAllMovies =  (req, res, next) =>{
    Movies.find().then(
        (movie) => {
            res.status(200).json(movie);
        }).catch((error) =>{
            error: error
        });
};

//Find a specific movie API

exports.getSpecificMovie = (req, res, next) => {
    Movies.findOne({
      _id: req.params.id
    }).then((movie) => {
        res.status(200).json(movie);
      }
    ).catch((error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

//Delete Movie API

exports.deleteMovie = (req, res, next) => {
    Movies.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Movie Deleted successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  //Movie update API
 
exports.updateMOvie = (req, res, next) => {
    const movie = new Movies({
      _id: req.params.id,
      movieid: req.body.movieid,
      movieName: req.body.movieName,
      cost: req.body.cost,
      status: req.body.status

    });
    Movies.updateOne({_id: req.params.id}, movie).then(
      () => {
        res.status(201).json({
          message: 'Movie updated successfully!'
        });            
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: "Cannot update Movie"+error
        });
      }
    );
  };

//Add movie API

exports.addMovie = (req, res, next) => {
    const movie = new Movies({
        movieid : req.body.movieid,
        movieName : req.body.movieName,
        cost: req.body.cost,
        status: req.body.status
    });
    movie.save().then(() => {
            res.status(201).json({
                message : 'Movie added successfully'
            })
        }
    ).catch((error) =>{
        res.status(400).json({
            error: error
        });
    });
};
