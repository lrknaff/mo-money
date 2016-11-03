
const Calc =  {

  monthsInYear: 12,
  weeksInYear: 52,

  workHoursPer: 2080,
  workWeeksInOffice: 48,
  workDaysPerWeek: 5,

  federalIncomeTaxRate: 0.25, // < 91,150: .25, >= 91150: .28
  federalBaseTaxAmount: 5183.75,
  federalBaseTaxBracket: 37650.00,

  ssiTaxRate: 0.0765,
  medicareTaxRate: 0.0145,
  stateTaxRate: {'Denver': .0941, 'San Francisico': .0880, 'New York City': .1338},

  standardMileageRate: 0.54,

  lunchAmount: 8.5,
  beerAmount: 10,

  costOfLivingAdjustment: {'Denver': 1, 'San Francisco': 0.83, 'New York City': 0.77},

  holdTotalIncome: 0,

  totalIncome: (annualSalary, annualBonus) => {
    Calc.holdTotalIncome = annualSalary + annualBonus
    return Calc.holdTotalIncome
  },

  total401kMatch: (totalIncome, match401k) => {
    return Math.round(totalIncome * match401k)
  },

  totalLunches: (lunch) => {
    if (lunch) {
      return Calc.workWeeksInOffice * Calc.lunchAmount * Calc.workDaysPerWeek
    }
    return 0
  },

  totalBeer: (beer) => {
    if (beer) {
      return Calc.workWeeksInOffice * Calc.beerAmount * Calc.workDaysPerWeek
    }
    return 0
  },

  totalIncomeAndBenefits: (annualSalary, annualBonus, match401k, lunch, beer) => {
    let tIncome = Calc.totalIncome(annualSalary, annualBonus)
    let t401kMatch = Calc.total401kMatch(tIncome, match401k)
    let tLunches = Calc.totalLunches(lunch)
    let tBeer = Calc.totalBeer(beer)
    return tIncome + t401kMatch + tLunches + tBeer
  },

  federalIncomeTax: (annualSalary, annualBonus) => {
    return Calc.federalBaseTaxAmount +
    ((Calc.totalIncome(annualSalary, annualBonus) -
    Calc.federalBaseTaxBracket) *
    Calc.federalIncomeTaxRate)
  },

  ssiTax: (annualSalary, annualBonus) => {
    return Calc.totalIncome(annualSalary, annualBonus) * Calc.ssiTaxRate
  },

  medicareTax: (annualSalary, annualBonus) => {
    return Calc.totalIncome(annualSalary, annualBonus) * Calc.medicareTaxRate
  },

  stateTax: (annualSalary, annualBonus, city) => {
    let adjustedStateTaxRate = Calc.stateTaxRate[city]
    return Calc.totalIncome(annualSalary, annualBonus) * adjustedStateTaxRate
  },

  commuteExpense: (milesToWork) => {
    return  Math.round(
            ((milesToWork * 2) *
            Calc.workDaysPerWeek *
            Calc.workWeeksInOffice) *
            Calc.standardMileageRate)
  },

  healthInsuranceExpense: (healthInsurancePremium) => {
    return healthInsurancePremium * Calc.monthsInYear
  },

  totalCosts: (annualSalary, annualBonus, match401k, lunch, beer, milesToWork, healthInsurancePremium, city) => {
    let tFedTax = Calc.federalIncomeTax(annualSalary, annualBonus)
    let tSsiTax = Calc.ssiTax(annualSalary, annualBonus)
    let tMedicareTax = Calc.medicareTax(annualSalary, annualBonus)
    let tStateTax = Calc.stateTax(annualSalary, annualBonus, city)
    let tCommuteExp = Calc.commuteExpense(milesToWork)
    let tHealthInsExp = Calc.healthInsuranceExpense(healthInsurancePremium)
    return tFedTax + tSsiTax + tMedicareTax + tStateTax + tCommuteExp + tHealthInsExp
  },

  netIncomeAndBenefits: (annualSalary, annualBonus, match401k, lunch, beer, milesToWork, healthInsurancePremium) => {
    let totalIncomeAndBenefits = Calc.totalIncomeAndBenefits(annualSalary, annualBonus, match401k, lunch, beer, city)
    let totalCosts = Calc.totalCosts(annualSalary, annualBonus, match401k, lunch, beer, milesToWork, healthInsurancePremium)
    return totalIncomeAndBenefits - totalCosts
  },

  costOfLivingCalculation: (annualSalary, annualBonus, match401k, lunch, beer, milesToWork, healthInsurancePremium, city) => {
    let adjustmentValue = Calc.costOfLivingAdjustment[city]
    let totalAdjustedIncomeAndBenefits = Calc.netIncomeAndBenefits(annualSalary, annualBonus, match401k, lunch, beer, milesToWork, healthInsurancePremium)
    return (adjustmentValue * totalAdjustedIncomeAndBenefits).toFixed(2)
  }
}

module.exports = Calc;
