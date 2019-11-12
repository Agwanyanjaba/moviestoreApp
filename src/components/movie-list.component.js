//create the connection between Front - end and the backend
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movie = props => (
    <tr>
        <td>{props.movie.movieid}</td>
        <td>{props.movie.movieName}</td>
        <td>{props.movie.cost}</td>
        <td>{props.movie.status}</td>
        <td>
            <Link to={"/edit/"+props.movie._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/delete/"+props.movie._id}>Delete</Link>
        </td>
    </tr>
)

export default class MovieList extends Component {

    constructor(props) {
        super(props);
        this.state = {movie: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/v1/api/allmovies')
            .then(response => {
                this.setState({ movie: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    movieList() {
        return this.state.movie.map(function(currentMovie, i){
            return <Movie movie={currentMovie} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Movies List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Movie ID</th>
                            <th>Name of Movie</th>
                            <th>Cost</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.movieList() }
                    </tbody>
                </table>
            </div>
        )
    }
}