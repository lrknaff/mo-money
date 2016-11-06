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
      const { company, title, city, salary, bonus, retirement, insurance, distance, lunch, beer, id } = this.props.card
      this.setState({
        id,
        company,
        title,
        city,
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

  addJob() {
    this.state.id = Date.now()
    this.state.retirement = this.state.retirement * 0.01
    this.state.adjustedSalary = costOfLivingCalculation(this.state)
    this.props.addJobToCardArray(this.state)
    this.setState({
      company: '',
      title: '',
      city: '',
      salary: '',
      bonus: '',
      retirement: '',
      insurance: '',
      distance: '',
    })
  }

  editJob() {
    this.state.retirement = this.state.retirement * 0.01
    this.state.adjustedSalary = costOfLivingCalculation(this.state)
    this.props.updateJobInArray(this.state)
    this.setState({
      company: '',
      title: '',
      city: '',
      salary: '',
      bonus: '',
      retirement: '',
      insurance: '',
      distance: '',
    })
  }

  deleteJob() {
    this.props.removeJobFromArray(this.state)
  }

  render() {
    const { company, title, city, salary, bonus, retirement, insurance, distance } = this.state
    return (
      <div className="input-form">

        <h2 className="input-form-main-title">{this.props.card ?
            `Edit job offer from ${this.props.card.company}` :
            'Add New Job Offer'}
        </h2>

        <div className="input-form-container">
          <InputComponent
            className="input-form-company"
            name="company"
            value={company}
            type="text"
            onChange={this.updateJobState}
          />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="Company">Company</label>
        </div>

        <div className="input-form-container">
          <InputComponent
            className="input-form-title"
            name="title"
            value={title}
            type="text"
            onChange={this.updateJobState}
          />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="Title">Title</label>
        </div>

        <div className="input-form-container">
          <InputComponent
            className="input-form-location"
            name="city"
            value={city}
            type="text"
            onChange={this.updateJobState}
          />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="city">City</label>
        </div>

        <div className="input-form-container">
          <InputComponent
            className="input-form-salary"
            name="salary"
            value={salary}
            type="number"
            onChange={this.updateJobState}
          />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="Salary">Salary</label>
        </div>

        <div className="input-form-container">
          <InputComponent
            className="input-form-bonus"
            name="bonus"
            value={bonus}
            type="number"
            onChange={this.updateJobState}
          />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="Bonus">Bonus</label>
        </div>

        <div className="input-form-container">
          <InputComponent
            className="input-form-401k"
            name="retirement"
            value={retirement}
            type="number"
            onChange={this.updateJobState}
          />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="401K">401K match %</label>
        </div>

        <div className="input-form-container">
          <InputComponent
            className="input-form-insurance"
            name="insurance"
            value={insurance}
            type="number"
            onChange={this.updateJobState}
          />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="Insurance">Insurance</label>
        </div>

        <div className="input-form-container">
          <InputComponent
            className="input-form-distance"
            name="distance"
            value={distance}
            type="number"
            onChange={this.updateJobState}
          />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="Distance">Distance from home</label>
        </div>

        <button
          className="submit-button waves-effect"
          onClick={this.props.card ? () => this.editJob() : () => this.addJob()}
        > Submit </button>
        {this.props.card ?
          <button
            className="submit-button waves-effect"
            onClick={() => this.deleteJob()}
          >Remove</button> : null
        }
      </div>
    )
  }
}
