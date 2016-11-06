const Calc = {

  monthsInYear: 12,
  weeksInYear: 52,
  workHoursPer: 2080,
  workWeeksInOffice: 48,
  workDaysPerWeek: 5,
  federalIncomeTaxRate: 0.25,  // < 91,150: .25, >= 91150: .28
  federalBaseTaxAmount: 5183.75,
  federalBaseTaxBracket: 37650.00,
  ssiTaxRate: 0.0765,
  medicareTaxRate: 0.0145,
  stateTaxRate: {
    'Denver': .0941,  // eslint-disable-line
    'San Francisco': 0.0880,
    'New York City': 0.1338,
  },
  standardMileageRate: 0.54,
  lunchAmount: 8.5,
  beerAmount: 10,
  costOfLivingAdjustment: {
    'Denver': 1, //eslint-disable-line
    'San Francisco': 0.83,
    'New York City': 0.77,
  },

  totalIncome: (annualSalary, annualBonus) => {
    Calc.holdTotalIncome = annualSalary + annualBonus
    return Calc.holdTotalIncome
  },

  total401kMatch: (totalIncome, match401k) => { // eslint-disable-line
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
    const tIncome = Calc.totalIncome(annualSalary, annualBonus)
    const t401kMatch = Calc.total401kMatch(tIncome, match401k)
    const tLunches = Calc.totalLunches(lunch)
    const tBeer = Calc.totalBeer(beer)
    return tIncome + t401kMatch + tLunches + tBeer
  },

  federalIncomeTax: (annualSalary, annualBonus) => { // eslint-disable-line
    return Calc.federalBaseTaxAmount +
    ((Calc.totalIncome(annualSalary, annualBonus) -
    Calc.federalBaseTaxBracket) *
    Calc.federalIncomeTaxRate)
  },

  ssiTax: (annualSalary, annualBonus) => { // eslint-disable-line
    return Calc.totalIncome(annualSalary, annualBonus) * Calc.ssiTaxRate
  },

  medicareTax: (annualSalary, annualBonus) => { // eslint-disable-line
    return Calc.totalIncome(annualSalary, annualBonus) * Calc.medicareTaxRate
  },

  stateTax: (annualSalary, annualBonus, city) => {
    const adjustedStateTaxRate = Calc.stateTaxRate[city]
    return Calc.totalIncome(annualSalary, annualBonus) * adjustedStateTaxRate
  },

  commuteExpense: (milesToWork) => { // eslint-disable-line
    return Math.round(
            ((milesToWork * 2) *
            Calc.workDaysPerWeek *
            Calc.workWeeksInOffice) *
            Calc.standardMileageRate)
  },

  healthInsuranceExpense: (healthInsurancePremium) => { // eslint-disable-line
    return healthInsurancePremium * Calc.monthsInYear
  },

  totalCosts: (annualSalary, annualBonus, match401k, lunch, beer, milesToWork, healthInsurancePremium, city) => {
    const tFedTax = Calc.federalIncomeTax(annualSalary, annualBonus)
    const tSsiTax = Calc.ssiTax(annualSalary, annualBonus)
    const tMedicareTax = Calc.medicareTax(annualSalary, annualBonus)
    const tStateTax = Calc.stateTax(annualSalary, annualBonus, city)
    const tCommuteExp = Calc.commuteExpense(milesToWork)
    const tHealthInsExp = Calc.healthInsuranceExpense(healthInsurancePremium)
    return tFedTax + tSsiTax + tMedicareTax + tStateTax + tCommuteExp + tHealthInsExp
  },

  netIncomeAndBenefits: (annualSalary, annualBonus, match401k, lunch, beer, milesToWork, healthInsurancePremium, city) => {
    const totalIncomeAndBenefits = Calc.totalIncomeAndBenefits(annualSalary, annualBonus, match401k, lunch, beer, city)
    const totalCosts = Calc.totalCosts(annualSalary, annualBonus, match401k, lunch, beer, milesToWork, healthInsurancePremium, city)
    return totalIncomeAndBenefits - totalCosts
  },

  costOfLivingCalculation: ({ salary, bonus, retirement, lunch, beer, distance, insurance, city }) => {
    const adjustmentValue = Calc.costOfLivingAdjustment[city]
    const totalAdjustedIncomeAndBenefits = Calc.netIncomeAndBenefits(salary, bonus, retirement, lunch, beer, distance, insurance, city)
    return (adjustmentValue * totalAdjustedIncomeAndBenefits).toFixed(2)
  },
}

module.exports = Calc
