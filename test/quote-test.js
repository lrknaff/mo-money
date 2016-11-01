import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');
import locus from 'locus';

import Quote from '../lib/components/Quote';

describe('Quote', () => {

  it('should call the getRandomQuote function', () => {
    sinon.spy(Quote.prototype, 'getRandomQuote');
    const wrapper = mount(<Quote />);

    expect(Quote.prototype.getRandomQuote.calledOnce).to.equal(true);
  });

});
