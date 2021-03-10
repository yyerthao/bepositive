import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class ViewMessage extends Component {

  render(){
    const {detailsReducer} = this.props.store;
    return(
      <div className="container">
        {detailsReducer.map((details, i) => {
          return(
            <div key={i}>
              <p>Name: {details.name}</p>
              <img src={details.image} alt="happy things"></img>
              <p>Details: {details.details}</p>
            </div>
          )
        })}




      </div>
    )
  }
}

export default connect(mapStoreToProps)(ViewMessage);
