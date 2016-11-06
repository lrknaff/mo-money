import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import locus from 'locus'
import Quote from '../lib/components/Quote'

const sinon = require('sinon')

describe('Quote', () => {
  context('Mounting', () => {
    it('should mount without props', () => {
      const quote = mount(<Quote />)
      expect(quote).to.have.length(1)
    })

    it('should call the getRandomQuote function', () => {
      sinon.spy(Quote.prototype, 'getRandomQuote')
      const wrapper = mount(<Quote />)
      expect(Quote.prototype.getRandomQuote.calledOnce).to.equal(true)
    })
  })
  // context('Updating', () => {
  //   it('no updating lifecycle methods to test', () => {
  //     //
  //   })
  // })
  // context('User Actions', () => {
  //   it('no user actions to test', () => {
  //     //
  //   })
  // })
})
