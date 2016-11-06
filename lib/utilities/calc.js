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
    'al': 0.0897,
    'ak': 0.0178,
    'az': 0.0825,
    'ar': 0.093,
    'ca': 0.0848,
    'co': 0.0752,
    'ct': 0.0635,
    'de': 0,
    'fl': 0.0666,
    'ga': 0.0701,
    'hi': 0.0435,
    'id': 0.0603,
    'il': 0.0864,
    'in': 0.07,
    'ia': 0.0679,
    'ks': 0.086,
    'ky': 0.06,
    'la': 0.09,
    'me': 0.055,
    'md': 0.06,
    'ma': 0.0625,
    'mi': 0.06,
    'mn': 0.0727,
    'ms': 0.0707,
    'mo': 0.0786,
    'mt': 0,
    'ne': 0.0687,
    'nv': 0.0798,
    'nh': 0,
    'nj': 0.0697,
    'nm': 0.0751,
    'ny': 0.0849,
    'nc': 0.069,
    'nd': 0.0682,
    'oh': 0.0714,
    'ok': 0.0882,
    'or': 0,
    'pa': 0.0634,
    'ri': 0.07,
    'sc': 0.0722,
    'sd': 0.0584,
    'tn': 0.0946,
    'tx': 0.0817,
    'ut': 0.0669,
    'vt': 0.0617,
    'va': 0.0563,
    'wa': 0.0889,
    'wv': 0.062,
    'wi': 0.0541,
    'wy': 0.0542,
    'alabama': 0.0897,
    'alaska': 0.0178,
    'arizona': 0.0825,
    'arkansas': 0.093,
    'california': 0.0848,
    'colorado': 0.0752,
    'connecticut': 0.0635,
    'delaware': 0,
    'florida': 0.0666,
    'georgia': 0.0701,
    'hawaii': 0.0435,
    'idaho': 0.0603,
    'illinois': 0.0864,
    'indiana': 0.07,
    'iowa': 0.0679,
    'kansas': 0.086,
    'kentucky': 0.06,
    'louisiana': 0.09,
    'maine': 0.055,
    'maryland': 0.06,
    'massachusetts': 0.0625,
    'michigan': 0.06,
    'minnesota': 0.0727,
    'mississippi': 0.0707,
    'missouri': 0.0786,
    'montana': 0,
    'nebraska': 0.0687,
    'nevada': 0.0798,
    'new hampshire': 0,
    'new jersey': 0.0697,
    'new mexico': 0.0751,
    'new york': 0.0849,
    'north carolina': 0.069,
    'north dakota': 0.0682,
    'ohio': 0.0714,
    'oklahoma': 0.0882,
    'oregon': 0,
    'pennsylvania': 0.0634,
    'rhode island': 0.07,
    'south carolina': 0.0722,
    'south dakota': 0.0584,
    'tennessee': 0.0946,
    'texas': 0.0817,
    'utah': 0.0669,
    'vermont': 0.0617,
    'virginia': 0.0563,
    'washington': 0.0889,
    'west virginia': 0.062,
    'wisconsin': 0.0541,
    'wyoming': 0.0542,
  },
  standardMileageRate: 0.54,
  lunchAmount: 8.5,
  beerAmount: 10,
  costOfLivingAdjustment: {
    'Denver': 1,
    'San Francisco': 0.83,
    'New York City': 0.77,
    'alabama': 1.1,
    'alaska': 0.76,
    'arizona': 1.02,
    'arkansas': 1.14,
    'california': 0.7,
    'colorado': 1,
    'connecticut': 0.76,
    'delaware': 0.98,
    'florida': 1.02,
    'georgia': 1.1,
    'hawaii': 0.6,
    'idaho': 1.14,
    'illinois': 1.05,
    'indiana': 1.15,
    'iowa': 1.09,
    'kansas': 1.11,
    'kentucky': 1.11,
    'louisiana': 1.07,
    'maine': 0.89,
    'maryland': 0.8,
    'massachusetts': 0.79,
    'michigan': 1.1,
    'minnesota': 1,
    'mississippi': 1.18,
    'missouri': 1.11,
    'montana': 1,
    'nebraska': 1.11,
    'nevada': 0.97,
    'new hampshire': 0.83,
    'new jersey': 0.84,
    'new mexico': 1.05,
    'new york': 0.75,
    'north carolina': 1.07,
    'north dakota': 1.02,
    'ohio': 1.08,
    'oklahoma': 1.14,
    'oregon': 0.88,
    'pennsylvania': 0.97,
    'rhode island': 0.82,
    'south carolina': 1.01,
    'south dakota': 1.02,
    'tennessee': 1.11,
    'texas': 1.11,
    'utah': 1.09,
    'vermont': 0.82,
    'virginia': 0.99,
    'washington': 0.94,
    'west virginia': 1.05,
    'wisconsin': 1.05,
    'wyoming': 1.1,
    'al': 1.1,
    'ak': 0.76,
    'az': 1.02,
    'ar': 1.14,
    'ca': 0.7,
    'co': 1,
    'ct': 0.76,
    'de': 0.98,
    'fl': 1.02,
    'ga': 1.1,
    'hi': 0.6,
    'id': 1.14,
    'il': 1.05,
    'in': 1.15,
    'ia': 1.09,
    'ks': 1.11,
    'ky': 1.11,
    'la': 1.07,
    'me': 0.89,
    'md': 0.8,
    'ma': 0.79,
    'mi': 1.1,
    'mn': 1,
    'ms': 1.18,
    'mo': 1.11,
    'mt': 1,
    'ne': 1.11,
    'nv': 0.97,
    'nh': 0.83,
    'nj': 0.84,
    'nm': 1.05,
    'ny': 0.75,
    'nc': 1.07,
    'nd': 1.02,
    'oh': 1.08,
    'ok': 1.14,
    'or': 0.88,
    'pa': 0.97,
    'ri': 0.82,
    'sc': 1.01,
    'sd': 1.02,
    'tn': 1.11,
    'tx': 1.11,
    'ut': 1.09,
    'vt': 0.82,
    'va': 0.99,
    'wa': 0.94,
    'wv': 1.05,
    'wi': 1.05,
    'wy': 1.1,
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
    city = city.toLocaleLowerCase()
    const adjustmentValue = Calc.costOfLivingAdjustment[city]
    const totalAdjustedIncomeAndBenefits = Calc.netIncomeAndBenefits(salary, bonus, retirement, lunch, beer, distance, insurance, city)
    return (adjustmentValue * totalAdjustedIncomeAndBenefits).toFixed(2)
  },
}

module.exports = Calc
