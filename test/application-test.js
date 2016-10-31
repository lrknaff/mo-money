import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');
import locus from 'locus';

import Application from '../lib/components/Application';

describe('Application', () => {

  it('should display a sign In button if user state is null', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find('.sign-in-button')).to.have.length(1);
  });

  it('should display a quote if user state is null', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find('.sign-in-container').children).to.have.length(1);
  });

  it('should display a sign out button if user is signed in', () => {
    const wrapper = mount(<Application />);
    wrapper.setState({ user: 'Lacey' });

    expect(wrapper.find('.sign-out-button')).to.have.length(1);
  });

});
