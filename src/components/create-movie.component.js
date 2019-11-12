import React, {Component} from 'react';
import axios from 'axios';

class CreateMovie extends Component{
    constructor(props){
        super(props)
        this.state ={
           movieid: '',
           moviename: '',
           cost: '',
           status: ''
        }
    }
        changeHandler = e =>{
            this.setState({[e.target.name]: e.target.value})
        }

        //define the submitHandler method
        submitHandler = e =>{
            e.preventDefault()
            console.log(this.state+"Viraibles on submit")//log state object

           const newMovie = {
                movieid: this.state.movieid,
                movieName: this.state.movieName,
                cost: this.state.cost,
                status: this.state.status
            };

            axios.post('http://localhost:4000/v1/api/add', newMovie)
            .then(res => console.log(this.state+"response from server"))
            .catch((error=>{
                console.log(error)
            }));

            this.setState({
                movieid: '',
                movieName: '',
                cost: '',
                status: ''
            });
            window.alert('Created Movie Successfully!');
            this.props.history.push('/');
        }
        
    render(){
        //destructure and add them to render method. Get value from form attributes
        const {movieid,movieName, cost, status} = this.state
        return(
            
            <div  style={{marginTop: 10}}>
                <form onSubmit={this.submitHandler}> 
                    <div className="form-group"> 
                        <label>Movie ID: </label>
                        <input type="text" name ="movieid"
                        className="form-control" 
                        value={movieid}
                        onChange={this.changeHandler}/>
                    </div>
                    <div className="form-group">
                        <label>Movie Name: </label>
                        <input type="text" name ="movieName"
                        className="form-control" 
                        value={movieName}
                        onChange={this.changeHandler}/>
                    </div>
                    <div className="form-group">
                        <label>Rental Cost: </label>
                        <input type="text" name ="cost"
                        className="form-control" 
                        value={cost}
                        onChange={this.changeHandler}/>
                    </div>
                    <div className="form-group">
                        <label>Movie Status: </label>
                        <input type="text" name ="status"
                        className="form-control" 
                        value={status}
                        onChange={this.changeHandler}/>
                    </div>
                    <div className="form-group">
                        <button type = "submit" className="btn btn-primary">Add Movie</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default CreateMovie;