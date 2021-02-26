import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ProfilePhoto from '../../Images/001-leonardo.png';

class UserPage extends Component {
  render() {
    return (
      <div className="container">
        <center>
          <h1 id="welcome">Hello, {this.props.store.user.username}!</h1>
          {/* <p>Your ID is: {this.props.store.user.id}</p> */}
          <img src={ProfilePhoto} alt="Profile photo of user"/><br></br><h6>This is your profile photo</h6>
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
