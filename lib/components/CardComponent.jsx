import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';


export default class CardComponent extends Component {
  render() {

    return (
      <article className='card'>
        <h2 className='card-job-title'>Google</h2>
        <h3 className='card-job-location'>San Fransicso, CA</h3>
        <h6 className='card-job-offer'>offer: $75k</h6>
        <h6 className='card-job-adjusted'>adjusted: $50k</h6>
        <img className='card-arrow'
             src='#'
             />
      </article>
    )
  }

}
