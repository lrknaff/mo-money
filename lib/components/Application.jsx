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
        {user ?
          <button
            className='sign-out-button'
            onClick  ={ () => signOut() }>
            Sign Out
          </button> :

          <div className='sign-in-container'>

            <div className='sign-in-logo-container'>
              <a href='/public' className='sign-in-logo'>
                MoMoney Logo
              </a>
            </div>
            {/* <img src='../lib/images/logo.svg' /> */}
            <Quote />
            <button
              className='sign-in-button waves-effect waves-light btn'
              onClick  ={ () => signIn() }>
              Sign In
            </button>
          </div>
        }
        </section>
      </div>
    )
  }
}
