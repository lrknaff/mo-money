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

  // addJobCard() {
  //   const job = {
  //     company: this.state.company,
  //     title: this.state.title,
  //     location: this.state.location,
  //     salary: this.state.salary,
  //     bonus: this.state.bonus,
  //     retirement: this.state.retirement,
  //     insurance: this.state.insurance,
  //     distance: this.state.distance,
  //   }
  //
  //   this.props.addJobToCardArray(job)
  // }

  render() {
    return (
      <form className="input-form">

        <h2 className="input-form-main-title">Add New Job Offer</h2>

        <div className="input-form-container">
          <InputComponent
            className="input-form-company"
            name="company"
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
            type="number"
            onChange={this.updateJobState}
          />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="Distance">Distance from home</label>
        </div>

        <button
          className="submit-button waves-effect"
          onClick={() => this.props.addJobToCardArray(this.state)}
        > Submit </button>

      </form>
    )
  }
}
