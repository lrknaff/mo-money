
const Calc =  {

  monthsInYear: 12,
  weeksInYear: 52,

  workHoursPer: 2080,
  workWeeksInOffice: 48,
  workDaysPerWeek: 5,

  federalIncomeTaxRate: 0.25, // < 91,150: .25, >= 91150: .28
  ssiTaxRate: 0.0765,
  medicareTaxRate: 0.0145,
  stateTaxRate: 0.0941, // CO: .0941, CA: .0880 CA, NY: .1338

  standardMileageRate: 0.54,

  lunchAmount: 8.5,
  beerAmount: 10,

  costOfLivingAdjustment: 1, // Denver: 1, San Francisco: 0.83, New York City: 0.77

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
    return Calc.totalIncome(annualSalary, annualBonus) * Calc.federalIncomeTaxRate
  },

  ssiTax: (annualSalary, annualBonus) => {
    return Calc.totalIncome(annualSalary, annualBonus) * Calc.ssiTaxRate
  },

  medicareTax: (annualSalary, annualBonus) => {
    return Calc.totalIncome(annualSalary, annualBonus) * Calc.medicareTaxRate
  },

  stateTax: (annualSalary, annualBonus) => {
    return Calc.totalIncome(annualSalary, annualBonus) * Calc.stateTaxRate
  }

}

module.exports = Calc;
