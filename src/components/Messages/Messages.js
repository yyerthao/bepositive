import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



// TO DO:
// Add functions for icons on card



const styles = theme => ({
  card: {
    maxWidth: 400,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  root: {
    flexGrow: 1,
  },
});

class Messages extends Component {

 state = {
    expanded: false,
    spacing: '10'
 };

componentDidMount(){
  this.props.dispatch({type: 'FETCH_MESSAGE'});
}

handleExpandClick = () => {
  this.setState(state => ({ expanded: !state.expanded }));
};

  render() {
    const {messageReducer} = this.props.store;
        const { classes } = this.props;
            const { spacing } = this.state.spacing;

    return (
      <div className="container messenger-background">
          <Grid container className={classes.root} spacing={10}>
            <Grid item xs={10} >
              <Grid container className="center" spacing={(spacing)}>
                {[0, 1, 2].map(value => (
                  <Grid key={value} item>
                    <Paper className="center"/>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        {messageReducer.map((message, i) => {
          return (
            <Card className={classes.card} key={i}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                          B
                        </Avatar>
                      }
                      action={
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={message.name}
                      subheader="SOME RANDOM DATE"
                    />
                    <CardMedia
                      className={classes.media}
                      image={message.image}
                      alt="Happy things"
                    />
                    <CardContent>
                      <Typography component="p">
                        {message.details}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.actions}>
                      <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="Share">
                        <ShareIcon />
                      </IconButton>
                      {/* <IconButton
                        className={classnames(classes.expand, {
                          [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton> */}
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph>More Happyness:</Typography>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et repellat earum ea mollitia, at saepe! 
                            Accusantium, magnam natus provident obcaecati aut cumque illo, exercitationem vel sapiente, consequuntur 
                            nulla officia cum!Lorem
                        </Typography>
                      </CardContent>
                    </Collapse>
                </Card>
            )
          })}
        </Grid>
      </div>
    );
  }
}

Messages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStoreToProps)(withStyles(styles)(Messages));
