import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import locus from 'locus'
import Application from '../lib/components/Application'

const sinon = require('sinon')

describe('Application', () => {
  context('Mounting', () => {
    it('should mount without props', () => {
      const application = mount(<Application />)
      expect(application).to.have.length(1)
    })

    it('should mount the SignedOutContainer if user state is null', () => {
      const application = shallow(<Application />)
      expect(application.find('SignedOutContainer')).to.have.length(1)
    })

    it('should display a quote if user state is null', () => {
      const application = mount(<Application />)
      expect(application.find('Quote')).to.have.length(1)
    })

    it('should display a sign out button if user is signed in', () => {
      const application = mount(<Application />)
      application.setState({ user: 'Lacey' })
      expect(application.find('.sign-out-button')).to.have.length(1)
    })

    xit('should populate state.cardArray with the users job objects from firebase', () => {
      //
    })

    xit('should populate state.cardArray with an example job object if the users firebase is empty', () => {
      const application = shallow(<Application />)
      application.update()
      expect(application.state('cardArray')).to.have.length(1)
    })
  })
})
