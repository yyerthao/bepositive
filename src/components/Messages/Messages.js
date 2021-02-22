import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class Messages extends Component {

  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default connect(mapStoreToProps)(Messages);
