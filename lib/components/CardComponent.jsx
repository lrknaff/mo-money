import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase'


export default class CardComponent extends Component {
  render() {
    const { jobTitle, jobLocation, jobOffer, jobAdjusted } = this.props

    return (
      <article className="card">
        <h2 className="card-job-title"> {jobTitle} </h2>
        <h3 className="card-job-location">{jobLocation}</h3>
        <h6 className="card-job-offer">offer: {jobOffer}</h6>
        <h6 className="card-job-adjusted">adjusted: {jobAdjusted}</h6>
        <img className="card-arrow" src="#" />
      </article>
    )
  }

}
