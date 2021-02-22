import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class Messages extends Component {

componentDidMount(){
  this.props.dispatch({type: 'FETCH_MESSAGE'});
}


  render() {
    const {messageReducer} = this.props.store;
    return (
      <div className="container">
        {JSON.stringify(messageReducer)}
        <p>{messageReducer.details}</p>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(Messages);
