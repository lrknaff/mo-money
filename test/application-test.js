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
      expect(application.contains('SignedOutContainer'))
    })

    it('should display a quote if user state is null', () => {
      const wrapper = shallow(<Application />)
      expect(wrapper.find('.sign-in-container').children).to.have.length(1)
    })

    it('should display a sign out button if user is signed in', () => {
      const wrapper = mount(<Application />)
      wrapper.setState({ user: 'Lacey' })
      expect(wrapper.find('.sign-out-button')).to.have.length(1)
    })

    xit('should populate state.cardArray with the users job objects from firebase', () => {
      expect(false).to.equal(true)
    })

    xit('should populate state.cardArray with an example job object if the users firebase is empty', () => {
      const application = shallow(<Application />)
      expect(application.state('cardArray')).to.have.length(1)
    })
  })
  context('Updating', () => {
    it('no updating lifecycle methods to test', () => {
      //
    })
  })
  context('User Actions', () => {
    it('no user actions to test', () => {
      //
    })
  })
})
