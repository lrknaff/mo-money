import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import locus from 'locus'
import SignedInContainer from '../lib/containers/SignedInContainer'

const sinon = require('sinon')

describe('SignedInContainer', () => {
  context('Mounting', () => {
    it('should mount without props', () => {
      const signedInContainer = mount(<SignedInContainer />)
      expect(signedInContainer).to.have.length(1)
    })
  })
  context('Updating', () => {
    it('should set the state of cardArray to the card array prop if the the prop is passed in', () => {
      const signedInContainer = mount(<SignedInContainer cardArray={[{ id: 1 }]} />)
      signedInContainer.update()
      expect(signedInContainer.state('cardArray')).to.deep.equal([{ id: 1 }])
    })
  })
  // context('User Actions', () => {
  //   it('no user actions to test', () => {
  //     //
  //   })
  // })
})
