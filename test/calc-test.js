var assert = require('chai').assert;
import Calc from '../lib/utilities/calc'
require ('locus')

describe('Calc Tests: ', () => {

  var annualSalary = 80000
  var annualBonus = 5000
  var match401k = 0.07
  var lunch = true
  var beer = true
  var lunchFalse = false
  var beerFalse = false
  var healthInsurancePremium = 200
  var milesToWork = 5
  var company = 'CaptianU'
  var city = 'Denver'

  var totalIncome = Calc.totalIncome(annualSalary, annualBonus)
  var total401kMatch = Calc.total401kMatch(totalIncome, match401k)
  var totalLunchesTrue = Calc.totalLunches(true)
  var totalLunchesFalse = Calc.totalLunches(false)
  var totalBeerTrue = Calc.totalBeer(true)
  var totalBeerFalse = Calc.totalBeer(false)

  describe('Income:', () => {
    it('should be a function', () => {
      assert.isFunction(Calc.totalIncome)
    })

    it('should return a value of 85000 for a salary of 80000 and a bonus of 7500', () => {
      assert.equal(totalIncome, 85000)
    })

    it('should return a value of 5950 for 401(k)Match rate of .07', () => {
      assert.equal(total401kMatch, 5950)
    })

    it('should return a value of 2040 or 0 for a lunch benefit for the year', () => {
      assert.equal(totalLunchesTrue, 2040)
      assert.equal(totalLunchesFalse, 0)
    })

    it('should return a value of 2400 or 0 for a beer benefit for the year', () => {
      assert.equal(totalBeerTrue, 2400)
      assert.equal(totalBeerFalse, 0)
    })

    it('should return a value of 95390 or 90950 for a total income and benefits', () => {
      var totalIncomeAndBenefits = Calc.totalIncomeAndBenefits(annualSalary, annualBonus, match401k, lunch, beer)
      assert.equal(totalIncomeAndBenefits, 95390)
      var totalIncomeAndBenefits = Calc.totalIncomeAndBenefits(annualSalary, annualBonus, match401k, lunchFalse, beerFalse)
      assert.equal(totalIncomeAndBenefits, 90950)
    })
  })

  describe('Costs:', () => {
    it('should return a value of 21250 for total federal income tax', () => {
      var federalIncomeTax = Calc.federalIncomeTax(annualSalary, annualBonus)
      assert.equal(federalIncomeTax, 21250)
    })

    it('should return a value of 6502.50 for total ssi Tax', () => {
      var ssiTax = Calc.ssiTax(annualSalary, annualBonus)
      assert.equal(ssiTax, 6502.50)
    })

    it('should return a value of 1232.50 for total ssi tax', () => {
      var ssiTax = Calc.medicareTax(annualSalary, annualBonus)
      assert.equal(ssiTax, 1232.50)
    })

    it('should return a value of 7998.50 for total ssi tax', () => {
      var stateTax = Calc.medicareTax(annualSalary, annualBonus)
      assert.equal(stateTax, 1232.50)
    })

    it('should return a value of 2400.00 for total stateTax', () => {
      assert.equal()
    }
  })
});
