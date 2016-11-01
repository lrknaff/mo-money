
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

  totalIncome: (annualSalary, annualBonus) => {
    return annualSalary + annualBonus
  }
}

module.exports = Calc;
