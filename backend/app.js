const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//const movieRoutes = express.Router();
const Movies = require('./models/movie');

app.use(cors());
app.use(bodyParser.json());

//mongoose.connect('mongodb://127.0.0.1:27017/moviestore', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://john:UHMmcfVK76txtvdn@cluster0-b6qck.mongodb.net/test?retryWrites=true&w=majority');


const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


//Get all movies API
app.get('/v1/api/allmovies', (req, res, next) =>{
    Movies.find().then(
        (movie) => {
            res.status(200).json(movie);
        }).catch((error) =>{
            error: error
        });
});

//Find a specific movie API

app.get('/v1/api/movie/:id', (req, res, next) => {
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
  });

//Delete Movie API
app.delete('/v1/api/delete/:id', (req, res, next) => {
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
  });

  //Movie update API
app.put('/v1/api/update/:id', (req, res, next) => {
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
  });

//Add movie API
app.post('/v1/api/add', (req, res, next) => {
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
});



module.exports = app;