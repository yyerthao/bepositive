import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class ViewMessage extends Component {


  render() {
    return (
      <div>
        <h2>View Message Component</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ViewMessage);
