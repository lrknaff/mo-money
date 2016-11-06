import React, { Component } from 'react'
import { pick, map, extend, filter } from 'lodash'
import moment from 'moment'
import firebase, { reference, signIn, signOut } from '../firebase'
import Quote from '../components/Quote'

export default class SignedOutContainer extends Component {

  signIn() {
    signIn()
  }

  render() {
    return (
      <section className="sign-in-container">
        <div className="sign-in-logo-container">
          <a href="/public" className="sign-in-logo">
            MoMoney Logo
          </a>
        </div>
        <Quote />
        <button className="sign-in-button waves-effect" onClick={() => this.signIn()}> Sign In </button>
      </section>
    )
  }
}
