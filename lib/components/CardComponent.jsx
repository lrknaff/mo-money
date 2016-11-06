import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase'
import InputContainer from '../containers/InputContainer'


export default class CardComponent extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false,
      edit: false,
    }
  }

  toggleEditJob = () => {
    this.setState({ edit: !this.state.edit })
  }

  render() {
    const { company, title, city, state, salary, bonus, retirement, insurance, distance, lunch, beer, adjustedSalary } = this.props.card
    const adjustedAvailible = (adjustedSalary !== 'NaN')
    return (
      <section className="card">
        <div className="card-job-container">
          <article className="card-job-breakdown">
            <h2 className="card-job-company"> {company} </h2>
            <h2 className="card-job-title"> {title} </h2>
            <h3 className="card-job-city">{city}, {state}</h3>
            <h6 className="card-job-offer">offer: ${salary}</h6>
            <h6 className="card-job-adjusted">
              adjusted: ${adjustedAvailible ? (parseInt(adjustedSalary, 10)).toFixed(0)
                                           : 'unavailable'}
            </h6>
            <button
              className={this.state.expanded ? 'card-arrow open' : 'card-arrow closed'}
              onClick={() => { this.setState({ expanded: !this.state.expanded }) }}
            >
              <div>
                <span className="first" />
                <span className="last" />
              </div>
            </button>
          </article>
          {this.state.expanded ?
            <div>
              <hr />
              <article className="card-rate-breakdown">
                <div className="card-label">
                  <h6>Annual pay:</h6>
                  <h6>Monthly pay:</h6>
                  <h6>Weekly pay:</h6>
                  <h6>Hourly pay:</h6>
                </div>
                <div className="card-amount">
                  <h6>${adjustedAvailible ? (parseInt(adjustedSalary, 10)).toFixed(0)
                                                                      : 'unavailable'}</h6>
                  <h6>${adjustedAvailible ? (adjustedSalary / 12).toFixed(0)
                                                                       : 'unavailable'}</h6>
                  <h6>${adjustedAvailible ? (adjustedSalary / 52).toFixed(0)
                                                                      : 'unavailable'}</h6>
                  <h6>${adjustedAvailible ? (adjustedSalary / 2080).toFixed(0)
                                                                      : 'unavailable'}</h6>
                </div>
              </article>
              <hr />
              <article className="card-detail-breakdown">
                <div className="card-label">
                  <h6>Salary:</h6>
                  <h6>Bonus:</h6>
                  <h6>401(k) Match:</h6>
                  <h6>Lunch:</h6>
                  <h6>Beer:</h6>
                  <h6>Insurance:</h6>
                  <h6>Miles From Home:</h6>
                </div>
                <div className="card-amount">
                  <h6>{salary}</h6>
                  <h6>{bonus}</h6>
                  <h6>{retirement}</h6>
                  <h6>true</h6>
                  <h6>false</h6>
                  <h6>{insurance}</h6>
                  <h6>{distance}</h6>
                </div>
              </article>
              <button
                className="card-detail-edit"
                onClick={() => { this.setState({ edit: !this.state.edit }) }}
                type="button"
              > Edit </button>
            </div>
          :
            null
        }
        </div>
        {this.state.edit ?
          <InputContainer
            updateJobInArray={this.props.updateJobInArray}
            removeJobFromArray={this.props.removeJobFromArray}
            card={this.props.card}
            toggleEditJob={this.toggleEditJob}
          />
           : null}
      </section>
    )
  }
}
