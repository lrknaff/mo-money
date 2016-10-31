import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { pick, map, extend, filter} from 'lodash';
import moment from 'moment';
import firebase, { signIn } from '../firebase';
// import firebase, { reference, signIn, signOut } from '../firebase';

export default class Application extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      <section className='sign-in-out'>
        <button
          className='sign-in-button'
          onClick={() => signIn()}>
          Sign In
        </button>
      </section>
      </div>
    )
  }
}
