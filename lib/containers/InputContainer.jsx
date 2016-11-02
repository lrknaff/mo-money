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
        <InputComponent className='input-form-title' placeholder='Job Title' type='text' />
        <InputComponent className='input-form-location' placeholder='Job Location' type='text' />
        <InputComponent className='input-form-salary' placeholder='Salary' type='number' />
        <InputComponent className='input-form-bonus' placeholder='Bonus' type='number' />
        <InputComponent className='input-form-401k' placeholder='401k match %' type='number' />
        <InputComponent className='input-form-insurance' placeholder='Insurance' type='number' />
        <InputComponent className='input-form-distance' placeholder='Miles from Home' type='number' />
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
