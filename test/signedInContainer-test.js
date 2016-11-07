import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import locus from 'locus'
import { user, cardArray } from './helpers/mockFirebase'
import SignedInContainer from '../lib/containers/SignedInContainer'

const sinon = require('sinon')

describe('SignedInContainer', () => {
  context('Mounting', () => {
    it('should mount without props', () => {
      const signedInContainer = mount(<SignedInContainer />)
      expect(signedInContainer).to.have.length(1)
    })

    it('should render a add card button', () => {
      const signedInContainer = shallow(<SignedInContainer />)
      expect(signedInContainer.find('.signed-in-add-card-button')).to.have.length(1)
    })

    it('should render a sign out button', () => {
      const signedInContainer = shallow(<SignedInContainer />)
      expect(signedInContainer.find('.sign-out-button')).to.have.length(1)
    })
  })

  context('Updating', () => {
    it('should set the state of cardArray to the card array prop if the the prop is passed in', () => {
      const signedInContainer = mount(<SignedInContainer cardArray={cardArray} />)
      signedInContainer.update()
      expect(signedInContainer.state('cardArray')).to.deep.equal(cardArray)
    })

    it('should map throught the cardArray and render three CardComponents', () => {
      const signedInContainer = mount(<SignedInContainer cardArray={cardArray} />)
      signedInContainer.update()
      expect(signedInContainer.find('CardComponent')).to.have.length(3)
    })
  })

  context('User Actions', () => {
    it('should call the signOut method when the signout button is clicked', () => {
      sinon.spy(SignedInContainer.prototype, 'signOut')
      const signedInContainer = shallow(<SignedInContainer cardArray={cardArray} />)
      signedInContainer.find('.sign-out-button').simulate('click')
      expect(SignedInContainer.prototype.signOut.calledOnce).to.equal(true)
    })

    it('should show an inputContainer component after the add card buttion is clicked', () => {
      const signedInContainer = shallow(<SignedInContainer cardArray={cardArray} />)
      signedInContainer.find('.signed-in-add-card-button').simulate('click')
      expect(signedInContainer.find('InputContainer')).to.have.length(1)
    })
  })
})
