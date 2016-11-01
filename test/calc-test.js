var assert = require('chai').assert;
import Calc from '../lib/utilities/calc';
require ('locus')

describe('Calc Tests: ', () => {

  it('should be a function', () => {
    assert.isFunction(Calc.totalIncome)
  })

  it('should return a value of 87500', () => {
    var calc = Calc.totalIncome(80000, 7500)
    assert.equal(calc, 87500)
  })

});
