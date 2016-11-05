import React, { Component } from 'react'
import { pick, map, extend, filter } from 'lodash'
import moment from 'moment'
import firebase, { reference, signIn, signOut } from '../firebase'
import InputComponent from '../components/InputComponent'


export default class InputContainer extends Component {
  constructor() {
    super()
    this.state = {
      company: '',
      title: '',
      location: '',
      salary: '',
      bonus: '',
      retirement: '',
      insurance: '',
      distance: '',
    }
  }

  updateJobState = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  addJob() {
    this.state.id = Date.now()
    this.props.addJobToCardArray(this.state)
    this.setState({
      company: '',
      title: '',
      location: '',
      salary: '',
      bonus: '',
      retirement: '',
      insurance: '',
      distance: '',
    })
  }

  render() {
    const { company, title, location, salary, bonus, retirement, insurance, distance } = this.state
    return (
      <div className="input-form">

        <h2 className="input-form-main-title">Add New Job Offer</h2>

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

        {/* <div className="input-form-container">
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
            name="location"
            value={location}
            type="text"
            onChange={this.updateJobState}
          />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="Location">Location</label>
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
        </div> */}

        <button
          className="submit-button waves-effect"
          onClick={() => this.addJob()}
          // onClick={e => this.props.addJobToCardArray(this.state)}
        > Submit </button>

      </div>
    )
  }
}
