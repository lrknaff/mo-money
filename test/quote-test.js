import React from 'react'
import { shallow, mount, render } from 'enzyme' // eslint-disable-line
import { assert, expect } from 'chai' // eslint-disable-line
import locus from 'locus' // eslint-disable-line
import Quote from '../lib/components/Quote'

const sinon = require('sinon') // eslint-disable-line

describe('Quote', () => {
  it('should call the getRandomQuote function', () => {
    sinon.spy(Quote.prototype, 'getRandomQuote')
    const wrapper = mount(<Quote />)

    expect(Quote.prototype.getRandomQuote.calledOnce).to.equal(true)
  })
})
