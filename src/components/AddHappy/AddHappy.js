import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
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
  render() {
    const {classes} = this.props;
    return (
      <div className="container">
        <h2>Add Some Happyness</h2>
        {JSON.stringify(this.props.store.genreReducer)}
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
              id="standard-name"
              label="Image Url"
              className={classes.textField}
              value={this.state.image}
              onChange={(event)=> this.handleChange(event, 'image')}
              margin="normal"
            />
            <br></br>
            <TextField
              id="standard-name"
              label="Details"
              className={classes.textField}
              value={this.state.details}
              onChange={(event)=> this.handleChange(event, 'details')}
              margin="normal"
            />
          </form>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Positive</MenuItem>
              <MenuItem value={20}>Uplifting</MenuItem>
              <MenuItem value={30}>Supportive</MenuItem>
              <MenuItem value={40}>Love</MenuItem>
            </Select>
          </FormControl>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AddHappy));

// INSERT INTO genre(id, name) VALUES(1, 'Positive'), (2, 'Uplifting'), (3, 'Supportive'), (4, 'Love');
