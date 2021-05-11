import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Swal from 'sweetalert2';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing() * 2,
    paddingBottom: theme.spacing() * 2,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  button: {
    margin: theme.spacing.unit,
  }
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

  editMessage = (messageID) => {
    console.log('Selecting this message to edit: ', messageID);
    this.props.dispatch({
      type: 'EDIT_MESSAGE',
      payload: messageID
    });
    this.props.history.push('/EditMessage')
  }




  render(){
    const { classes } = this.props;
      const {detailsReducer} = this.props.store;
      return(
        <div className="container">
          {JSON.stringify(detailsReducer)}
            <center>
              {detailsReducer.map((details, i)=> {
                return(
                  <Card className={classes.card} key={i}>
                     <CardActionArea>
                    <p>Name: {detailsReducer.name}</p>
                      <CardMedia>
                        <img src={detailsReducer.image} alt="Happy things" className="image-size"/>
                      </CardMedia>
                  </CardActionArea>
                  <CardContent>
                    <Typography>
                      Details: {detailsReducer.details}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" color="secondary" onClick={()=>this.deleteMessage(detailsReducer[0].id)}>Delete Message</Button>
                    <br></br>
                    <br></br>
                    <Button variant="contained" color="primary" onClick={()=> this.editMessage(detailsReducer[0].id)}>Edit</Button>
                    <br></br>
                  </CardActions>
                </Card>
                  )
                })}
            </center>
      </div>
    )
  }
}



export default connect(mapStoreToProps)(withStyles(styles)(ViewMessage));
