import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: '1',
  },
  textField: {
    marginLeft: theme.spacing.y,
    marginRight: theme.spacing.y,
    width: 200,
  },
  dense: {
    marginTop: 19,
  }
});


class AddHappy extends Component {
  state = {
    name: '',
    image: '',
    details: '',
    genre_id: ''
  };

componentDidMount(){
  this.props.dispatch({type: 'FETCH_GENRES'})
}

handleChange = (event, input) => {
  console.log('Details of message:', this.state);
  this.setState({
    ...this.state,
    [input]: event.target.value
  })
}

cancelSubmit = () =>{
  console.log('Cancelling submit')
}

submitHappyness = () =>{
  console.log('Submitting happyness')
}


  render() {
    const {classes} = this.props;
    return (
      <div className="container">
        <h2>Add Some Happyness</h2>
        {/* {JSON.stringify(this.props.store.genreReducer)} */}
          <form>
            <TextField
              id="standard-name"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={(event)=> this.handleChange(event, 'name')}
              margin="normal"
            />
            <br></br>
            <TextField
              id="standard-image"
              label="Image Url"
              className={classes.textField}
              value={this.state.image}
              onChange={(event)=> this.handleChange(event, 'image')}
              margin="normal"
            />
            <br></br>
            <textarea
              rows="10" 
              cols="80"
              id="textarea"
              type="text" 
              placeholder="Enter happy message here"
              value={this.state.details}
              onChange={(event) => this.handleChange (event, 'details')}>
            </textarea><br></br>
          </form>
              <InputLabel>
                  Genre
              </InputLabel>
              <Select 
                  className="dropdown"
                  value={this.state.genre_id} 
                  onChange={(event) => this.handleChange(event, 'genre_id')}>
{/* ----------------------------------------------- MAPPING OUT ARRAY OF GENRES REDUCER */}
                  
                  {this.props.store.genreReducer.map((genre, i) =>
                      <MenuItem key={i} value={genre.id}>
                          {genre.name}
                      </MenuItem>)}
              </Select>
          <br></br>           
          <br></br>           
          <button onClick={this.submitHappyness}>Share happyness</button>
          <br></br>           
          <br></br>  
          <button onClick={this.cancelSubmit}>Cancel</button>





      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AddHappy));

// INSERT INTO genre(id, name) VALUES(1, 'Positive'), (2, 'Uplifting'), (3, 'Supportive'), (4, 'Love');
