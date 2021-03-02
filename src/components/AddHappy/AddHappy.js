import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


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
    image: '',
    details: '',
    genre_id: ''
  };

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
          <form>
            <TextField
              id="standard-name"
              label="Name"
              className={classes.textField}
              value={this.state.details}
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
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AddHappy));
