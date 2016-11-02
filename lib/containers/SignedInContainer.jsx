import React, { Component } from 'react';
import { pick, map, extend, filter} from 'lodash';
import moment from 'moment';
import firebase, { reference, signIn, signOut } from '../firebase';
import CardComponent from '../components/CardComponent';

export default class SignedInContainer extends Component {
  constructor() {
    super();
    this.state = {
      cardsArray: [{key: 2, jobTitle: 'Google', jobLocation: 'San Fransisco', jobOffer: 75000, jobAdjusted: 50000}],
    }
  }



  render() {



    return (
      <div className='signed-in-container'>
        <header className='signed-in-header'>
        </header>

        <main className='signed-in-body'>
        {this.state.cardsArray.map( card => <CardComponent
          key={card.key}
          jobTitle={card.jobTitle}
          jobLocation={card.jobLocation}
          jobOffer={card.jobOffer}
          jobAdjusted={card.jobAdjusted}
          />)}

          <button
            className='sign-out-button waves-effect'
            onClick  ={ () => signOut() }>
            Sign Out
          </button>
        </main>

      </div>
    )
  }

}
