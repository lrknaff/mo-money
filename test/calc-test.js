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
  var cityDenver = 'Denver'
  var citySanFrancisco = 'San Francisco'
  var cityNYC = 'New York City'

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
      var totalIncomeAndBenefits = Calc.totalIncomeAndBenefits(
        annualSalary,
        annualBonus,
        match401k,
        lunch,
        beer)
      assert.equal(totalIncomeAndBenefits, 95390)
      var totalIncomeAndBenefits = Calc.totalIncomeAndBenefits(
        annualSalary,
        annualBonus,
        match401k,
        lunchFalse,
        beerFalse)
      assert.equal(totalIncomeAndBenefits, 90950)
    })
  })

  describe('Costs:', () => {
    it('should return a value of 17021.25 for total federal income tax', () => {
      var federalIncomeTax = Calc.federalIncomeTax(annualSalary, annualBonus)
      assert.equal(federalIncomeTax,  17021.25 )
    })

    it('should return a value of 6502.50 for total ssi Tax', () => {
      var ssiTax = Calc.ssiTax(annualSalary, annualBonus)
      assert.equal(ssiTax, 6502.50)
    })

    it('should return a value of 1232.50 for total medicare tax', () => {
      var ssiTax = Calc.medicareTax(annualSalary, annualBonus)
      assert.equal(ssiTax, 1232.50)
    })

    it('should return a value of 7998.50 for total State tax Denver', () => {
      var stateTax = Calc.stateTax(annualSalary, annualBonus, cityDenver)
      assert.equal(stateTax, 7998.50)
    })

    it('should return a value of 7998.50 for total State tax San Francisco', () => {
      var stateTax = Calc.stateTax(annualSalary, annualBonus, citySanFrancisco)
      assert.equal(stateTax, 7480)
    })

    it('should return a value of 7998.50 for total State tax New York City', () => {
      var stateTax = Calc.stateTax(annualSalary, annualBonus, cityNYC)
      assert.equal(stateTax, 11373)
    })

    it('should return a value of 1296.00 for total transportation costs', () => {
      var commuteExpense = Calc.commuteExpense(milesToWork)
      assert.equal(commuteExpense, 1296.00 )
    })

    it('should return a value of 2400.00 for a total for health insurance', () => {
      var healthInsuranceExpense = Calc.healthInsuranceExpense(healthInsurancePremium)
      assert.equal(healthInsuranceExpense, 2400.00)
    })

    it('should return a value of 40679.50 for a total of all costs', () => {
      var totalCosts = Calc.totalCosts(
        annualSalary,
        annualBonus,
        match401k,
        lunch,
        beer,
        milesToWork,
        healthInsurancePremium,
        cityDenver)
      assert.equal(totalCosts, 36450.75)
    })
  })

  describe('Income, benefits, costs, and cost of living adjustment:', () => {

    it('should return a value of 58939.25 after deducting costs from income and benefits', () => {
      var netIncomeAndBenefits = Calc.netIncomeAndBenefits(
        annualSalary,
        annualBonus,
        match401k,
        lunch,
        beer,
        milesToWork,
        healthInsurancePremium,
        cityDenver)
      assert.equal(netIncomeAndBenefits, 58939.25)
    })

    it('should return a value of 58939.25 when the city is Denver', () => {
    var costOfLivingCalculation = Calc.costOfLivingCalculation(
      annualSalary,
      annualBonus,
      match401k,
      lunch,
      beer,
      milesToWork,
      healthInsurancePremium,
      cityDenver)
      assert.equal(costOfLivingCalculation, 58939.25)
    })

    it('should return a value of 48919.58 when the city is San Francisco', () => {
      var costOfLivingCalculation = Calc.costOfLivingCalculation(
        annualSalary,
        annualBonus,
        match401k,
        lunch,
        beer,
        milesToWork,
        healthInsurancePremium,
        citySanFrancisco)
      assert.equal(costOfLivingCalculation, 49349.93)
    })

    it('should return a value of 45383.22 when the city is New York City', () => {
      var costOfLivingCalculation = Calc.costOfLivingCalculation(
        annualSalary,
        annualBonus,
        match401k,
        lunch,
        beer,
        milesToWork,
        healthInsurancePremium,
        cityNYC)
      assert.equal(costOfLivingCalculation, 42784.86)
    })

  })
});
