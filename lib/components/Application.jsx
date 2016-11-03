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
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }))
  }

  addJobToDB() {
    console.log('trying to add job to DB')
  }

  render() {
    const user = this.state.user

    return (
      <div className="sign-in-out">
        {user ?
          <SignedInContainer addJobToDB={this.addJobToDB.bind(this)} /> :
          <SignedOutContainer /> // eslint-disable-line
        }
      </div>
    )
  }
}
