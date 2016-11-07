import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase'


export default class InputComponent extends Component {
  render() {
    const { value, placeholder, onChange, className, type, name, ariaLabel, checked } = this.props

    return (
      <input
        className={className}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required
        checked={checked}
        name={name}
        aria-label={ariaLabel}
      />
    )
  }
}
