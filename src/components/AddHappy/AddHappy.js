import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class AddHappy extends Component {
  state = {
    heading: 'Add Happy',
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AddHappy);
