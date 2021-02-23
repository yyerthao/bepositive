import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './LandingPage.css';
import RegisterForm from '../RegisterForm/RegisterForm';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

class LandingPage extends Component {


  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="container">
            <RegisterForm />
            <center>
              <h4>Already a Member?</h4>
              <Button  variant="contained" className={classes.button} onClick={this.onLogin}>
                Login
              </Button>
            </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(LandingPage));
