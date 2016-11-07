import React, { Component } from 'react'
import { pick, map, extend, filter } from 'lodash'
import moment from 'moment'
import firebase, { reference, signIn, signOut } from '../firebase'
import InputComponent from '../components/InputComponent'
import { costOfLivingCalculation } from '../utilities/calc'

export default class InputContainer extends Component {
  constructor() {
    super()
    this.state = {
      company: '',
      title: '',
      city: '',
      state: '',
      salary: '',
      bonus: '',
      retirement: '',
      insurance: '',
      distance: '',
      lunch: false,
      beer: false,
    }
  }

  componentWillMount() {
    if (this.props.card) {
      const { company, title, city, state, salary, bonus, retirement, insurance, distance, lunch, beer, id } = this.props.card
      this.setState({
        id,
        company,
        title,
        city,
        state,
        salary,
        bonus,
        retirement,
        insurance,
        distance,
        lunch,
        beer,
      })
    }
  }

  updateJobState = (e) => {
    const { value, name, type } = e.target
    this.setState({ [name]: type === 'number' ? parseInt(value, 10) : value })
  }

  toggleState = (e) => {
    const { value, name } = e.target
    console.log(value)
    this.setState({ [name]: !value })
  }

  addJob() {
    this.state.id = Date.now()
    this.state.adjustedSalary = costOfLivingCalculation(this.state)
    this.props.addJobToCardArray(this.state)
    this.setState({
      company: '',
      title: '',
      city: '',
      state: '',
      salary: '',
      bonus: '',
      retirement: '',
      insurance: '',
      distance: '',
      lunch: false,
      beer: false,
    })
    this.props.toggleAddJob()
  }

  editJob() {
    this.state.adjustedSalary = costOfLivingCalculation(this.state)
    this.props.updateJobInArray(this.state)
    this.setState({
      company: '',
      title: '',
      city: '',
      state: '',
      salary: '',
      bonus: '',
      retirement: '',
      insurance: '',
      distance: '',
      lunch: false,
      beer: false,
    })
    this.props.toggleEditJob()
  }

  render() {
    const { company, title, city, state, salary, bonus, retirement, lunch, beer, insurance, distance } = this.state
    return (
      <div className="input-form-outer-container">
        <form className="input-form-inner-container">
          <h2 className="input-form-main-title">{this.props.card ?
              `Edit job offer from ${this.props.card.company}` :
              'Add New Job Offer'}
          </h2>

          <div className="input-form-container">
            <InputComponent
              className="input-form-company"
              placeholder="ABC Corp."
              name="company"
              value={company}
              type="text"
              onChange={this.updateJobState}
              ariaLabel="company name input"
            />
            <span className="input-form-highlight" />
            <span className="input-form-bar" />
            <label htmlFor="input-form-company">Company</label>
          </div>

          <div className="input-form-container">
            <InputComponent
              className="input-form-title"
              placeholder="Front End Engineer"
              name="title"
              value={title}
              type="text"
              onChange={this.updateJobState}
              ariaLabel="job title input"
            />
            <span className="input-form-highlight" />
            <span className="input-form-bar" />
            <label htmlFor="input-form-title">Title</label>
          </div>

          <div className="input-form-container">
            <InputComponent
              className="input-form-location"
              placeholder="Denver"
              name="city"
              value={city}
              type="text"
              onChange={this.updateJobState}
              label="input company city"
              ariaLabel="job city location input"
            />
            <span className="input-form-highlight" />
            <span className="input-form-bar" />
            <label htmlFor="city">City</label>
          </div>

          <div className="input-form-container">
            <InputComponent
              className="input-form-location"
              name="state"
              placeholder="CO"
              value={state}
              type="text"
              onChange={this.updateJobState}
              ariaLabel="job location state input"
            />
            <span className="input-form-highlight" />
            <span className="input-form-bar" />
            <label htmlFor="state">State</label>
          </div>

          <div className="input-form-container">
            <InputComponent
              className="input-form-salary"
              placeholder="60000"
              name="salary"
              value={salary}
              type="number"
              onChange={this.updateJobState}
              ariaLabel="job annual salary offer input"
            />
            <span className="input-form-highlight" />
            <span className="input-form-bar" />
            <label htmlFor="Salary">Annual Salary</label>
          </div>

          <div className="input-form-container">
            <InputComponent
              className="input-form-bonus"
              placeholder="6000"
              name="bonus"
              value={bonus}
              type="number"
              onChange={this.updateJobState}
              ariaLabel="job yearly bonus input"
            />
            <span className="input-form-highlight" />
            <span className="input-form-bar" />
            <label htmlFor="Bonus">Annual Bonus</label>
          </div>

          <div className="input-form-container">
            <InputComponent
              className="input-form-401k"
              placeholder="7"
              name="retirement"
              value={retirement}
              type="number"
              onChange={this.updateJobState}
              ariaLabel="job 401k % match input"
            />
            <span className="input-form-highlight" />
            <span className="input-form-bar" />
            <label htmlFor="401K">401K match %</label>
          </div>

          <div className="input-form-container">
            <h6 htmlFor="lunch">Lunch</h6>
            <InputComponent
              className="input-form-lunch"
              name="lunch"
              checked={lunch}
              type="checkbox"
              onChange={() => this.setState({ lunch: !this.state.lunch })}
              ariaLabel="lunch"
            />
          </div>

          <div className="input-form-container">
            <h6 htmlFor="beer">Beer</h6>
            <InputComponent
              className="input-form-beer"
              name="beer"
              checked={beer}
              type="checkbox"
              onChange={() => this.setState({ beer: !this.state.beer })}
              ariaLabel="beer"
            />
          </div>

          <div className="input-form-container">
            <InputComponent
              className="input-form-insurance"
              name="insurance"
              placeholder="200"
              value={insurance}
              type="number"
              onChange={this.updateJobState}
              ariaLabel="job monthly insurance cost input"
            />
            <span className="input-form-highlight" />
            <span className="input-form-bar" />
            <label htmlFor="Insurance">Monthly Insurance Premium</label>
          </div>

          <div className="input-form-container">
            <InputComponent
              className="input-form-distance"
              placeholder="7"
              name="distance"
              value={distance}
              type="number"
              onChange={this.updateJobState}
              ariaLabel="job distance from home in miles input"
            />
            <span className="input-form-highlight" />
            <span className="input-form-bar" />
            <label htmlFor="Distance">Distance from home in miles</label>
          </div>

          <button
            className="submit-button waves-effect"
            onClick={this.props.card ? () => this.editJob() : () => this.addJob()}
            disabled={!(company && title && city && state && salary && bonus && retirement && insurance && distance)}
            type="button"
            aria-label="submit new job"
          > Submit </button>
        </form>
      </div>
    )
  }
}
