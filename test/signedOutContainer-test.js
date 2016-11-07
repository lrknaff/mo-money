import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import locus from 'locus'
import SignedOutContainer from '../lib/containers/SignedOutContainer'

const sinon = require('sinon')

describe('SignedInContainer', () => {
  context('Mounting', () => {
    it('should mount without props', () => {
      const signedOutContainer = mount(<SignedOutContainer />)
      expect(signedOutContainer).to.have.length(1)
    })

    it('should mount the Quote component', () => {
      const signedOutContainer = shallow(<SignedOutContainer />)
      expect(signedOutContainer.find('Quote')).to.have.length(1)
    })

    it('should show the sign in button', () => {
      const signedOutContainer = shallow(<SignedOutContainer />)
      expect(signedOutContainer.find('.sign-in-button')).to.have.length(1)
    })
  })

  context('User Actions', () => {
    it('should call the firebase signIn function when the signed in button is clicked', () => {
      sinon.spy(SignedOutContainer.prototype, 'signIn')
      const signedOutContainer = shallow(<SignedOutContainer />)
      signedOutContainer.find('.sign-in-button').simulate('click')
      expect(SignedOutContainer.prototype.signIn.calledOnce).to.equal(true)
    })
  })
})
