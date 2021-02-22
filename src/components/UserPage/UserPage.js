import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {
  render() {
    return (
      <div>
        <center>
          <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
          <p>Your ID is: {this.props.store.user.id}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod, quae voluptatibus quisquam consectetur nemo 
            laudantium ratione inventore nostrum magni doloribus similique maiores obcaecati officiis delectus, soluta 
            officia explicabo dolorum repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod, quae voluptatibus quisquam consectetur nemo 
            laudantium ratione inventore nostrum magni doloribus similique maiores obcaecati officiis delectus, soluta 
            officia explicabo dolorum repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod, quae voluptatibus quisquam consectetur nemo 
            laudantium ratione inventore nostrum magni doloribus similique maiores obcaecati officiis delectus, soluta 
            officia explicabo dolorum repudiandae.
          </p>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserPage);
