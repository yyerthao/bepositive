import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
// import { FormControl } from '@material-ui/core';



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
  }
});


class EditMessage extends Component {
  state = {
    name: '',
    image: '',
    details: '',
    genre_id: ''
  };

componentDidMount(){
  this.props.dispatch({type: 'FETCH_GENRES'})
    this.setState({
        name: this.props.store.detailsReducer.name,
        image: this.props.store.detailsReducer.image,
        details: this.props.store.detailsReducer.details,
        genre_id: this.props.store.genreReducer.genre_id,
    })
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

submitHappyness = (messageID) =>{
  console.log('Submitting happyness')
  this.props.dispatch({type: 'UPDATE_MESSAGE', payload: {id: messageID, messageDetails: this.state}});
  this.props.history.push('/messages');
}


  render() {
    const {classes} = this.props;
    const {detailsReducer} = this.props.store;
    return (
      <div className="container">
        <center>
          <h2>Edit Happyness</h2>
        </center>
        {JSON.stringify(detailsReducer)};
          <div className="flex-grid">
            <div className="col">
          <br></br>           
          <br></br>           
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
            <br></br>
            <br></br>
          </div>
          <div className="col">
          <TextField
            id="standard-textarea"
            label="Details of happyness"
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
                  defaultValue= ""
                //   value={this.state.genreReducer_id} 
                  onChange={(event) => this.handleChange(event, 'genre_id')}>
{/* ----------------------------------------------- MAPPING OUT ARRAY OF GENRES REDUCER */}
                  {this.props.store.genreReducer.map((genre, i) =>
                      <MenuItem key={i} value={genre.id}>
                          {genre.name}
                      </MenuItem>)}
              </Select>
          <button onClick={this.submitHappyness}>Save</button>
          <br></br>           
          <br></br>  
          <button onClick={this.cancelSubmit}>Cancel</button>





      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(EditMessage));

// INSERT INTO genre(id, name) VALUES(1, 'Positive'), (2, 'Uplifting'), (3, 'Supportive'), (4, 'Love');
