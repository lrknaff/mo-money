var assert = require('chai').assert;
import Calc from '../lib/utilities/calc';
require ('locus')

describe('Calc Tests: ', () => {

  var annualSalary = 80000
  var annualBonus = 5000
  var match401k = 0.07
  var lunch = true
  var beer = true
  var healthInsurancePremium = 200
  var mileToWork = 5
  var company = 'CaptianU'
  var city = 'Denver'

  it('should be a function', () => {
    assert.isFunction(Calc.totalIncome)
  })

  it('should return a value of 85000 for a salary of 80000 and a bonus of 7500', () => {
    var totalIncome = Calc.totalIncome(annualSalary, annualBonus)
    assert.equal(totalIncome, 85000)
  })

  it('should return a value of 5950 for 401(k)Match rate of .07', () => {
    var totalIncome = Calc.totalIncome(annualSalary, annualBonus)
    var total401kMatch = Calc.total401kMatch(totalIncome, match401k)
    assert.equal(total401kMatch, 5950)
  })
});
