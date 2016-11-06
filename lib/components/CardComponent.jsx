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
              <article className="card-rate-breakdown">
                <div className="card-label">
                  <h6 className="card-rate-label">Annual:</h6>
                  <h6 className="card-rate-label">monthly:</h6>
                  <h6 className="card-rate-label">weekly:</h6>
                  <h6 className="card-rate-label">Hourly:</h6>
                </div>
                <div className="card-amount">
                  <h6 className="card-rate-annual">{adjustedAvailible ? (parseInt(adjustedSalary, 10)).toFixed(0)
                                                                      : 'unavailable'}</h6>
                  <h6 className="card-rate-monthly">{adjustedAvailible ? (adjustedSalary / 12).toFixed(0)
                                                                       : 'unavailable'}</h6>
                  <h6 className="card-rate-weekly">{adjustedAvailible ? (adjustedSalary / 52).toFixed(0)
                                                                      : 'unavailable'}</h6>
                  <h6 className="card-rate-hourly">{adjustedAvailible ? (adjustedSalary / 2080).toFixed(0)
                                                                      : 'unavailable'}</h6>
                </div>
              </article>
              <article className="card-detail-breakdown">
                <div className="card-label">
                  <h6 className="card-detail-annual">Salary:</h6>
                  <h6 className="card-detail-monthly">Bonus:</h6>
                  <h6 className="card-detail-weekly">401(k) Match:</h6>
                  <h6 className="card-detail-hourly">Lunch:</h6>
                  <h6 className="card-detail-hourly">Beer:</h6>
                  <h6 className="card-detail-hourly">Insurance:</h6>
                  <h6 className="card-detail-hourly">Miles From Home:</h6>
                </div>
                <div className="card-amount">
                  <h6 className="card-detail-annual">{salary}</h6>
                  <h6 className="card-detail-monthly">{bonus}</h6>
                  <h6 className="card-detail-weekly">{retirement}</h6>
                  <h6 className="card-detail-hourly">{lunch}</h6>
                  <h6 className="card-detail-hourly">{beer}</h6>
                  <h6 className="card-detail-hourly">{insurance}</h6>
                  <h6 className="card-detail-hourly">{distance}</h6>
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
