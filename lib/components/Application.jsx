import React, { Component } from 'react'
import { pick, map, extend, filter } from 'lodash'
import moment from 'moment'
import firebase, { reference, signIn, signOut } from '../firebase'
import SignedInContainer from '../containers/SignedInContainer'
import SignedOutContainer from '../containers/SignedOutContainer'

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      cardArray: [],
      cardDatabase: null,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user =>
      this.assignDBReference(user))
  }

  assignDBReference(user) {
    this.setState({
      user,
      cardDatabase: user ? firebase.database().ref(user.uid) : null,
    },
      () => {
        this.createDBEventListener(user)
      }
    )
  }

  createDBEventListener(user) {
    if (user) {
      firebase.database().ref(user.uid).on('value', (snapshot) => {
        const cards = snapshot.val() || {}
        this.setState({
          cardArray: map(cards, (val, key) => extend(val, { key })),
        })
      })
    } else {
      this.setState({
        cards: [],
      })
    }
  }

  pushJobsToDB = (cardArray) => {
    this.state.cardDatabase.push(cardArray)
  }

  render() {
    const user = this.state.user

    return (
      <div className="sign-in-out">
        {user ?
          <SignedInContainer pushJobsToDB={this.pushJobsToDB} /> :
          <SignedOutContainer /> // eslint-disable-line
        }
      </div>
    )
  }
}
