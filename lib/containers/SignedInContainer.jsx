import React, { Component } from 'react'
import { pick, map, extend, filter } from 'lodash'
import moment from 'moment'
import firebase, { reference, signIn, signOut } from '../firebase'
import CardComponent from '../components/CardComponent'
import InputContainer from '../containers/InputContainer'

export default class SignedInContainer extends Component {
  constructor() {
    super()
    this.state = {
      cardArray: [{ id: 2, title: 'Google', location: 'San Fransisco', salary: 75000, jobAdjusted: 50000 }],
    }
  }

  addJobToCardArray = (job) => {
    this.state.cardArray.push(job)
    this.setState({ cardArray: this.state.cardArray })
    this.props.pushJobsToDB(this.state.cardArray)
  }

  render() {
    return (
      <div className="signed-in-container">
        <header className="signed-in-header" />
        <main className="signed-in-body">
          <InputContainer addJobToCardArray={this.addJobToCardArray} />
          {this.state.cardArray.map(card =>
            <CardComponent
              key={card.id}
              title={card.title}
              location={card.location}
              jobOffer={card.salary}
              jobAdjusted={card.salary}
            />
          )}
          <button className="sign-out-button waves-effect" onClick={() => signOut()}>Sign Out</button>
        </main>
      </div>
    )
  }
}
