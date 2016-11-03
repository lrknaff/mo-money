import React, { Component } from 'react';
import { pick, map, extend, filter} from 'lodash';
import moment from 'moment';
import firebase, { reference, signIn, signOut } from '../firebase';
import InputComponent from '../components/InputComponent';


export default class InputContainer extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    return (
      <form className='input-form'>

        <h2 className='input-form-main-title'>Add New Job Offer</h2>

        <div className='input-form-container'>
          <InputComponent className='input-form-title' type='text'/>
          <span className="input-form-highlight"></span>
          <span className="input-form-bar"></span>
          <label>Company</label>
        </div>

        <div className='input-form-container'>
          <InputComponent className='input-form-location' type='text' />
          <span className="input-form-highlight"></span>
          <span className="input-form-bar"></span>
          <label>Location</label>
        </div>

        <div className='input-form-container'>
          <InputComponent className='input-form-salary' type='number' />
          <span className="input-form-highlight"></span>
          <span className="input-form-bar"></span>
          <label>Salary</label>
        </div>

        <div className='input-form-container'>
          <InputComponent className='input-form-bonus' type='number' />
          <span className="input-form-highlight"></span>
          <span className="input-form-bar"></span>
          <label>Bonus</label>
        </div>

        <div className='input-form-container'>
          <InputComponent className='input-form-401k' type='number' />
          <span className="input-form-highlight"></span>
          <span className="input-form-bar"></span>
          <label>401K match %</label>
        </div>

        <div className='input-form-container'>
          <InputComponent className='input-form-insurance' type='number' />
          <span className="input-form-highlight"></span>
          <span className="input-form-bar"></span>
          <label>Insurance</label>
        </div>

        <div className='input-form-container'>
          <InputComponent className='input-form-distance' type='number' />
          <span className="input-form-highlight"></span>
          <span className="input-form-bar"></span>
          <label>Distance from home</label>
        </div>

        <div className='input-form-radio'>
          <p>Lunch</p>
            <InputComponent className='input-form-lunch' type='radio' /> Y
            <InputComponent className='input-form-beer' type='radio' /> N
        </div>

        <div className='input-form-container'>
          <p>Beer/Wine</p>
            <InputComponent className='input-form-lunch' type='radio' /> Y
            <InputComponent className='input-form-beer' type='radio' /> N
        </div>

        <button
          className='submit-button waves-effect'>
          Submit
        </button>

      </form>
    )
  }

}
