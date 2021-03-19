import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Swal from 'sweetalert2';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing() * 2,
    paddingBottom: theme.spacing() * 2,
  },
});


class ViewMessage extends Component {

  deleteMessage = (id) => {
    console.log('Deleting message with id # ', id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.dispatch({
          type: 'DELETE_MESSAGE',
          payload: id
        })
        Swal.fire(
          'Deleted!',
          'Your message has been deleted.',
          'success'
        )
      }
      this.props.history.push('/messages')
    })
  }

  editMessage = (id) => {
    console.log('Selecting this message to edit: ', id);
    this.props.dispatch({
      type: 'EDIT_MESSAGE',
      payload: id
    });
    this.props.history.push('/EditMessage')
  }




  render(props){
    const { classes } = this.props;
      const {detailsReducer} = this.props.store;
      return(
        <div className="container">
          {JSON.stringify(detailsReducer)}
          <center>
          <Paper className={classes.root} elevation={1}>
              <div>
                <p>Name: {detailsReducer.name}</p>
                <img src={detailsReducer.image} alt="Happy things" className="image-size"/>
                <p>Details: {detailsReducer.details}</p>
                <button onClick={()=>this.deleteMessage(detailsReducer[0].id)}>Delete Message</button>
                <br></br>
                <br></br>
                <button onClick={()=> this.editMessage(detailsReducer.id)}>Edit</button>
                <br></br>
              </div>
          </Paper>
          </center>
      </div>
    )
  }
}


ViewMessage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStoreToProps)(withStyles(styles)(ViewMessage));
