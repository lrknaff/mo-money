import React, { Component } from 'react';
import { pick, map, extend, filter} from 'lodash';
import moment from 'moment';
import firebase, { reference, signIn, signOut } from '../firebase';

export default class SignedInContainer extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    return (
      <section className='signed-in-container'>
        <header className='signed-in-header'>
        </header>
        <button
          className='sign-out-button waves-effect'
          onClick  ={ () => signOut() }>
          Sign Out
        </button>
      </section>
    )
  }

}
