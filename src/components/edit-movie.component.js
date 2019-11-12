import React, { Component } from 'react';
import axios from 'axios';

export default class EditMovie extends Component {

    constructor(props) {
        super(props);

        this.onChangeMovieid = this.onChangeMovieid.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            movieid: '',
            movieName: '',

        }
    }

    componentDidMount() {
        axios.get('https://movieapp002.herokuapp.com/v1/api/movie/'+this.props.match.params.id)
            .then(response => {
                this.setState({movieid: response.data.movieid, movieName: response.data.movieName})
                console.log(response+"from server to ui");
            })
            .catch(function (error) {
                console.log(error+"from server");
            })
    }
    
    onChangeMovieid(e) {
        this.setState({
            movieid: e.target.value
        });
    }

    onChangeMovieName(e) {
        this.setState({
            movieName: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            movieid: this.state.movieid,
            movieName: this.state.movieName,
            cost: this.state.cost,
            status: this.state.status
        };
        console.log(obj);
        axios.put('https://movieapp002.herokuapp.com/v1/api/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
            window.alert('Updated Movie Successfully');
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Movie</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Movie ID: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.movieid}
                                onChange={this.onChangeMovieid}
                                />
                    </div>
                    <div className="form-group">
                        <label>Movie Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.movieName}
                                onChange={this.onChangeMovieName}
                                />
                    </div>
                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Movie" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

