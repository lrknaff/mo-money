import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { pick, map, extend, filter} from 'lodash';
import moment from 'moment';
import firebase, { reference, signIn, signOut } from '../firebase';
import Quote from './Quote';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
    console.log()
  }

  render() {
    const user = this.state.user;

    return (
      <div>
        <section className='sign-in-out'>
          <div className='active-user'>
          {user ?
            <button
              className='sign-out-button'
              onClick  ={ () => signOut() }>
              Sign Out
            </button> :

            <article className='sign-in-container'>
              <Quote />
              <button
                className='sign-in-button'
                onClick  ={ () => signIn() }>
                Sign In
              </button>
            </article>
          }
          </div>
        </section>
      </div>
    )
  }
}
