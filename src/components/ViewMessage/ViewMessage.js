import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class ViewMessage extends Component {


  render() {
    const {details} = this.props.store;
    return (
      <div>
        <h2>View Message Component</h2>
        {JSON.stringify(details)}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ViewMessage);
