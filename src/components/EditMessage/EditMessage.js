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
    name: this.props.store.detailsReducer[0].name,
    image: this.props.store.detailsReducer[0].image,
    details: this.props.store.detailsReducer[0].details,
    genre_id: this.props.store.detailsReducer[0].genre_id
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

updateHappy = (messageId) =>{
  console.log('Submitting happyness')
  this.props.dispatch({type: 'UPDATE_MESSAGE', payload: {id: messageId, messageDetails: this.state}});
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
        This is what is inside the detailsReducer
        {JSON.stringify(detailsReducer)};
        This is state
        {JSON.stringify(this.state)}
          <div className="flex-grid">
            <div className="col">
          <br></br>           
          <br></br>           
            <TextField
              placeholder={this.state.name}
              multiline
              value={this.state.name}
              onChange={(event)=> this.handleChange(event, 'name')}
            />
            <br></br>
            <TextField
              placeholder={this.state.image}
              multiline
              value={this.state.image}
              onChange={(event)=> this.handleChange(event, 'image')}
            />
            <br></br>
            <br></br>
          </div>
          <div className="col">
          <TextField
            value={this.state.details}
            multiline
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
          <button onClick={()=> this.updateHappy(detailsReducer.id)}>Save</button>
          <br></br>           
          <br></br>  
          <button onClick={this.cancelSubmit}>Cancel</button>





      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(EditMessage));

// INSERT INTO genre(id, name) VALUES(1, 'Positive'), (2, 'Uplifting'), (3, 'Supportive'), (4, 'Love');
