import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase'
import InputContainer from '../containers/InputContainer'


export default class CardComponent extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false,
    }
  }
  render() {
    const { company, title, city, salary, bonus, retirement, insurance, distance, lunch, beer, adjustedSalary } = this.props.card

    return (
      <section className="card">
        <article className="card-job-breakdown">
          <h2 className="card-job-company"> {company} </h2>
          <h2 className="card-job-title"> {title} </h2>
          <h3 className="card-job-city">{city}</h3>
          <h6 className="card-job-offer">offer: {salary}</h6>
          <h6 className="card-job-adjusted">adjusted: {(parseInt(adjustedSalary, 10)).toFixed(0)}</h6>
          <img
            className="card-arrow"
            src="#"
            onClick={() => { this.setState({ expanded: !this.state.expanded }) }}
          />
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
                <h6 className="card-rate-annual">{(parseInt(adjustedSalary, 10)).toFixed(0)}</h6>
                <h6 className="card-rate-monthly">{(adjustedSalary / 12).toFixed(0) }</h6>
                <h6 className="card-rate-weekly">{(adjustedSalary / 52).toFixed(0)}</h6>
                <h6 className="card-rate-hourly">{(adjustedSalary / 2080).toFixed(0)}</h6>
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
            > Edit </button>
          </div>
        :
          null
        }
        {this.state.edit ?
          <InputContainer card={this.props.card} />
           : null}
      </section>
    )
  }
}
