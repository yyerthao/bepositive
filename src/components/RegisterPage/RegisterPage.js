import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import RegisterForm from '../RegisterForm/RegisterForm';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.y,
  }
});

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    const {classes} = this.props;
    return (
      <div>
        <center>
          <h1>The Happyer App</h1>
          {/* WILL BE INSERTING A FEATURE BAR HERE */}
            <p>The app where you leave happyer than when you came.</p>
        </center>
        <RegisterForm />
        <center>
          <Button
            variant="contained"
            type="primary"
            className={classes.button}
            onClick={() => {
              this.props.history.push('/login');
            }}
          >
            Login
          </Button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(RegisterPage));
