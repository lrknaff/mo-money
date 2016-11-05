import React, { Component } from 'react'
import { pick, map, extend, filter } from 'lodash'
import moment from 'moment'
import firebase, { database, signIn, signOut } from '../firebase'
import SignedInContainer from '../containers/SignedInContainer'
import SignedOutContainer from '../containers/SignedOutContainer'

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      cardArray: [],
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user =>
      this.assignDBReference(user))
  }

  assignDBReference(user) {
    this.setState({
      user,
      cardDatabase: user ? database.ref(user.uid) : null,
    },
      () => {
        this.createDBEventListener(user)
      }
    )
  }

  createDBEventListener(user) {
    if (database.ref(user.uid)) {
      database.ref(user.uid).on('value', (snapshot) => {
        const cards = snapshot.val() || {}
        this.setState({
          cardArray: map(cards, val => val),
        })
      })
    } else {
      this.setState({
        cardArray: [
          {
            company: 'Google',
            title: 'Front End Designer',
            location: 'San Fransisco, CA',
            salary: '75000',
            bonus: '15000',
            retirement: '4',
            insurance: '250',
            distance: '10',
            id: '1',
          },
        ],
      })
    }
  }

  pushJobsToDB = (cardArray) => {
    database.ref(this.state.user.uid).set(cardArray)
  }

  render() {
    const user = this.state.user

    return (
      <div className="sign-in-out">
        {user ?
          <SignedInContainer cardArray={this.state.cardArray} pushJobsToDB={this.pushJobsToDB} /> :
          <SignedOutContainer /> // eslint-disable-line
        }
      </div>
    )
  }
}
