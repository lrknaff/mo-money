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
        <main className='sign-in-out'>

        {user ?
          <section className='signed-in-container'>
            <header className='signed-in-header'>

            </header>
            <button
              className='sign-out-button waves-effect'
              onClick  ={ () => signOut() }>
              Sign Out
            </button>
          </section>

          :

          <section className='sign-in-container'>
            <div className='sign-in-logo-container'>
              <a href='/public' className='sign-in-logo'>
                MoMoney Logo
              </a>
            </div>
            <Quote />
            <button
              className='sign-in-button waves-effect'
              onClick  ={ () => signIn() }>
              Sign In
            </button>
          </section>
        }

        </main>
      </div>
    )
  }
}
