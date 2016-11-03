import React, { Component } from 'react'
import { pick, map, extend, filter } from 'lodash'
import moment from 'moment'
import firebase, { reference, signIn, signOut } from '../firebase'
import InputComponent from '../components/InputComponent'


export default class InputContainer extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  addJobCard() {
    // do rendery things
    this.props.addJobToDB()
  }

  render() {
    return (
      <form className="input-form">

        <h2 className="input-form-main-title">Add New Job Offer</h2>

        <div className="input-form-container">
          <InputComponent className="input-form-title" type="text" />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="Company">Company</label>
        </div>

        <div className="input-form-container">
          <InputComponent className="input-form-location" type="text" />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="Location">Location</label>
        </div>

        <div className="input-form-container">
          <InputComponent className="input-form-salary" type="number" />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="Salary">Salary</label>
        </div>

        <div className="input-form-container">
          <InputComponent className="input-form-bonus" type="number" />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="Bonus">Bonus</label>
        </div>

        <div className="input-form-container">
          <InputComponent className="input-form-401k" type="number" />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="401K">401K match %</label>
        </div>

        <div className="input-form-container">
          <InputComponent className="input-form-insurance" type="number" />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="Insurance">Insurance</label>
        </div>

        <div className="input-form-container">
          <InputComponent className="input-form-distance" type="number" />
          <span className="input-form-highlight" />
          <span className="input-form-bar" />
          <label htmlFor="Distance">Distance from home</label>
        </div>

        <button className="submit-button waves-effect"> Submit </button>

      </form>
    )
  }
}
