import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

//import CreateMovie from "./components/create-movie.component";

import CreateMovie from "./components/create-movie.component";
import MoviesList from "./components/movie-list.component";
import EditMovie from "./components/edit-movie.component";
import DeleteMovie from "./components/delete-movie.component";


class App extends Component {
  render() {
    return (
     
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://localhost/v1/api/allmovies" target="_blank">
            </a>
            <Link to="/" className="navbar-brand">Local Movie Store</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">All Movies</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Movies</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          
            <Route path="/" exact component={MoviesList} />
            <Route path="/edit/:id" component={EditMovie} />
            <Route path="/create" component={CreateMovie} />
            <Route path="/delete/:id" component={DeleteMovie}/>
          
          
        </div>
      </Router>
      
    );
  }
}

export default App;