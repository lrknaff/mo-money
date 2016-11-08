import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase'
import InputContainer from '../containers/InputContainer'


export default class CardComponent extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false,
      edit: false,
      mainCard: true,
    }
  }

  toggleEditJob = () => {
    this.setState({ edit: !this.state.edit })
  }

  toggleEditExpanded = () => {
    this.setState({
      edit: !this.state.edit,
      expanded: !this.state.expanded,
      mainCard: !this.state.mainCard,
    })
  }

  deleteJob() {
    this.props.removeJobFromArray(this.props.card)
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  render() {
    const { company, title, city, state, salary, bonus, retirement, insurance, distance, adjustedSalary } = this.props.card
    let { lunch, beer } = this.props.card

    lunch = lunch ? 'included' : 'not included'
    beer = beer ? 'included' : 'not included'

    const adjustedAvailible = (adjustedSalary !== 'NaN')
    return (
      <section className="card">
        {this.state.mainCard ?
        <div className="card-job-container">
          <article className="card-job-breakdown">
            <h2 className="card-job-company"> {company} </h2>
            <h2 className="card-job-title"> {title} </h2>
            <h3 className="card-job-city">{city}, {state}</h3>
            <h6 className="card-job-offer">offer: ${this.numberWithCommas(salary)}</h6>
            <h6 className="card-job-adjusted">
              adjusted: ${adjustedAvailible ? (this.numberWithCommas(parseInt(adjustedSalary, 10).toFixed(0)))
                                           : 'unavailable'}
            </h6>
            <button
              className={this.state.expanded ? 'card-arrow open' : 'card-arrow closed'}
              onClick={() => { this.setState({ expanded: !this.state.expanded }) }}
              aria-label="expand card view"
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
                  <h6>${adjustedAvailible ? this.numberWithCommas((parseInt(adjustedSalary, 10)).toFixed(0))
                                                                      : 'unavailable'}</h6>
                  <h6>${adjustedAvailible ? this.numberWithCommas((adjustedSalary / 12).toFixed(0))
                                                                       : 'unavailable'}</h6>
                  <h6>${adjustedAvailible ? this.numberWithCommas((adjustedSalary / 52).toFixed(0))
                                                                      : 'unavailable'}</h6>
                  <h6>${adjustedAvailible ? this.numberWithCommas((adjustedSalary / 2080).toFixed(0))
                                                                      : 'unavailable'}</h6>
                </div>
              </article>
              <hr />
              <article className="card-detail-breakdown">
                <div className="card-label">
                  <h6>Initial Salary:</h6>
                  <h6>Yearly Bonus:</h6>
                  <h6>401(k)% Match:</h6>
                  <h6>Lunch:</h6>
                  <h6>Beer:</h6>
                  <h6>Monthly Insurance:</h6>
                  <h6>Miles From Home:</h6>
                </div>
                <div className="card-amount">
                  <h6>${this.numberWithCommas(salary)}</h6>
                  <h6>${this.numberWithCommas(bonus)}</h6>
                  <h6>{retirement}</h6>
                  <h6>{lunch}</h6>
                  <h6>{beer}</h6>
                  <h6>${this.numberWithCommas(insurance)}</h6>
                  <h6>{distance}mi</h6>
                </div>
              </article>
              <button
                className="card-detail-edit"
                onClick={() => { this.setState({ edit: !this.state.edit, mainCard: !this.state.mainCard }) }}
                type="button"
              > Edit </button>
              <button
                className="remove-button waves-effect"
                onClick={() => this.deleteJob()}
                type="button"
              >Remove</button>
            </div>
          :
            null
        }
        </div> : null}
        {this.state.edit ?
          <InputContainer
            updateJobInArray={this.props.updateJobInArray}
            removeJobFromArray={this.props.removeJobFromArray}
            card={this.props.card}
            toggleEditJob={this.toggleEditExpanded}
          />
           : null}
      </section>
    )
  }
}
