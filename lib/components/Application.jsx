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

  componentWillMount() {
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
    database.ref(user.uid).on('value', (snapshot) => {
      const cards = snapshot.val() || {}
      cards.length ? this.setState({ cardArray: map(cards, val => val) })
                   : this.setState({
                     cardArray: [{
                       id: 1,
                       adjustedSalary: 58939.25,
                       company: 'MadWire',
                       title: 'Junior Underwater Basket Weaver',
                       city: 'Denver',
                       state: 'CO',
                       salary: 80000,
                       bonus: 5000,
                       retirement: 7,
                       insurance: 200,
                       distance: 5,
                       beer: true,
                       lunch: true,
                     }],
                   })
    })
  }

  pushJobsToDB = (cardArray) => {
    database.ref(this.state.user.uid).set(cardArray)
  }

  render() {
    const user = this.state.user

    return (
      <div className="sign-in-out">
        {user
          ? <SignedInContainer cardArray={this.state.cardArray} pushJobsToDB={this.pushJobsToDB} />
          : <SignedOutContainer />
        }
      </div>
    )
  }
}
