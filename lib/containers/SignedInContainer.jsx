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
      cardArray: [{
        company: 'Facebook',
        title: 'Front End Designer',
        city: 'San Fransisco, CA',
        salary: '75000',
        bonus: '15000',
        retirement: '4',
        insurance: '250',
        distance: '10',
        id: '1',
      }],
    }
  }
  componentWillUpdate() {
    if (this.props.cardArray !== this.state.cardArray) {
      this.setState({ cardArray: this.props.cardArray })
    }
  }

  addJobToCardArray = (job) => {
    this.state.cardArray.push(job)
    this.setState({ cardArray: this.state.cardArray })
    this.props.pushJobsToDB(this.state.cardArray)
  }

  updateJobInArray = (targetJob) => {
    this.state.cardArray.forEach((job, i) => {
      console.log('job.id', job.id)
      console.log('targetJob.id', targetJob.id)
      if (job.id === targetJob.id) {
        const newCardArray = this.state.cardArray
        newCardArray[i] = targetJob
        this.setState({ cardArray: newCardArray })
        this.props.pushJobsToDB(this.state.cardArray)
      }
    })
  }

  render() {
    return (
      <div className="signed-in-container">
        <header className="signed-in-header">
          <a href="/public" className="signed-in-logo">
            MoMoney Logo
          </a>
        </header>
        <main className="signed-in-body">
          <InputContainer addJobToCardArray={this.addJobToCardArray} />
          { this.state.cardArray.map(card =>
            <CardComponent
              updateJobInArray={this.updateJobInArray}
              card={card}
              key={card.id}
            />
           ) }
          <button className="sign-out-button waves-effect" onClick={() => signOut()}>Sign Out</button>
        </main>
      </div>
    )
  }
}
