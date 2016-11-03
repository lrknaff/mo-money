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

        <div className='input-form-container'>
          <InputComponent className='input-form-title' type='text' />
          <label>Company</label>
        </div>

        <div className='input-form-container'>
          <InputComponent className='input-form-location' type='text' />
          <label>Location</label>
        </div>

        <div className='input-form-container'>
          <InputComponent className='input-form-salary' type='number' />
          <label>Salary</label>
        </div>

        <div className='input-form-container'>
          <InputComponent className='input-form-bonus' type='number' />
          <label>Bonus</label>
        </div>

        <div className='input-form-container'>
          <InputComponent className='input-form-401k' type='number' />
          <label>401K match %</label>
        </div>

        <div className='input-form-container'>
          <InputComponent className='input-form-insurance' type='number' />
          <label>Insurance</label>
        </div>

        <div className='input-form-container'>
          <InputComponent className='input-form-distance' type='number' />
          <label>Distance from home</label>
        </div>

          <form className='input-form-radio'>
          <p>Lunch</p>
            <InputComponent className='input-form-lunch' type='radio' /> Y
            <InputComponent className='input-form-beer' type='radio' /> N
          </form>

          <form className='input-form-radio'>
          <p>Beer/Wine</p>
            <InputComponent className='input-form-lunch' type='radio' /> Y
            <InputComponent className='input-form-beer' type='radio' /> N
          </form>

      </form>
    )
  }

}
