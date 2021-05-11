import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: '1',
  },
  textField: {
    marginLeft: theme.spacing.y,
    marginRight: theme.spacing.y,
    width: 500,
  },
  dense: {
    marginTop: 19,
  },
  button: {
    margin: theme.spacing.unit,
  },
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
  this.props.dispatch({type: 'POST_HAPPY', payload: this.state})
  this.props.history.push('/messages');

}


  render() {
    const {classes} = this.props;
    return (
      <div className="container">
        <center>
          <h2>Add Some Happyness</h2>
        </center>
          <div className="flex-grid">
            <div className="col">
              <TextField
                style={{width: '25rem'}}
                id="standard-name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={(event)=> this.handleChange(event, 'name')}
                margin="normal"
              />
              <br></br>
              <TextField
                style={{width: '25rem'}}
                id="standard-image"
                label="Image Url"
                className={classes.textField}
                value={this.state.image}
                onChange={(event)=> this.handleChange(event, 'image')}
                margin="normal"
              />
            </div>
            <div className="col">
            <TextField
              id="standard-textarea"
              label="With placeholder multiline"
              placeholder="Placeholder"
              multiline
              className={classes.textField}
              margin="normal"
              onChange={(event) => this.handleChange(event, 'details')}
            />
            </div>
          </div>
              <InputLabel>
                  Genre
              </InputLabel>
              <Select 
                  style={{width: '10rem'}}
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
          <Button variant="contained" color="primary" className={classes.button} onClick={this.submitHappyness}>Share happyness</Button>
          <br></br>           
          <br></br>  
          <Button variant="contained" color="secondary" className={classes.button} onClick={this.cancelSubmit}>Cancel</Button>





      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AddHappy));

// INSERT INTO genre(id, name) VALUES(1, 'Positive'), (2, 'Uplifting'), (3, 'Supportive'), (4, 'Love');
