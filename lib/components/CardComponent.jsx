import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase'


export default class CardComponent extends Component {
  render() {
    const { title, location, jobOffer, jobAdjusted } = this.props

    return (
      <article className="card">
        <h2 className="card-job-title"> {title} </h2>
        <h3 className="card-job-location">{location}</h3>
        <h6 className="card-job-offer">offer: {jobOffer}</h6>
        <h6 className="card-job-adjusted">adjusted: {jobAdjusted}</h6>
        <img className="card-arrow" src="#" />
      </article>
    )
  }

}
