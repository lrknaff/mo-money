import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase'


export default class InputComponent extends Component {
  render() {
    const { value, placeholder, onChange, className, type, name } = this.props

    return (
      <input
        className={className}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required
        name={name}
        aria-label={className}
      />
    )
  }
}
