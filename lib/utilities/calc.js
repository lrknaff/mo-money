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
  stateTaxRate: { // Source: https://wallethub.com/edu/best-worst-states-to-be-a-taxpayer/2416/
    'denver': .0941,  // eslint-disable-line
    'san francisco': 0.0880,
    'new york city': 0.1338,
    'al': 0.0943,
    'ak': 0.0569,
    'az': 0.0969,
    'ar': 0.1225,
    'ca': 0.0880,
    'co': 0.0941,
    'ct': 0.1348,
    'de': 0.0602,
    'fl': 0.0903,
    'ga': 0.1059,
    'hi': 0.1034,
    'id': 0.0848,
    'il': 0.1454,
    'in': 0.1186,
    'ia': 0.1275,
    'ks': 0.1229,
    'ky': 0.1197,
    'la': 0.1024,
    'me': 0.1151,
    'md': 0.1185,
    'ma': 0.1144,
    'mi': 0.1309,
    'mn': 0.1159,
    'ms': 0.1211,
    'mo': 0.1130,
    'mt': 0.0692,
    'ne': 0.1385,
    'nv': 0.0772,
    'nh': 0.0988,
    'nj': 0.1239,
    'nm': 0.1065,
    'ny': 0.1338,
    'nc': 0.1061,
    'nd': 0.1033,
    'oh': 0.1297,
    'ok': 0.1064,
    'or': 0.0917,
    'pa': 0.1222,
    'ri': 0.1346,
    'sc': 0.0880,
    'sd': 0.0979,
    'tn': 0.0795,
    'tx': 0.1117,
    'ut': 0.0953,
    'vt': 0.1076,
    'va': 0.1089,
    'wa': 0.1169,
    'wv': 0.1038,
    'wi': 0.1358,
    'wy': 0.0745,
    'alabama': 0.0943,
    'alaska': 0.0569,
    'arizona': 0.0969,
    'arkansas': 0.1225,
    'california': 0.0880,
    'colorado': 0.0941,
    'connecticut': 0.1348,
    'delaware': 0.0602,
    'florida': 0.0903,
    'georgia': 0.1059,
    'hawaii': 0.1034,
    'idaho': 0.0848,
    'illinois': 0.1454,
    'indiana': 0.1186,
    'iowa': 0.1275,
    'kansas': 0.1229,
    'kentucky': 0.1197,
    'louisiana': 0.1024,
    'maine': 0.1151,
    'maryland': 0.1185,
    'massachusetts': 0.1144,
    'michigan': 0.1309,
    'minnesota': 0.1159,
    'mississippi': 0.1211,
    'missouri': 0.1130,
    'montana': 0.0692,
    'nebraska': 0.1385,
    'nevada': 0.0772,
    'new hampshire': 0.0988,
    'new jersey': 0.1239,
    'new mexico': 0.1065,
    'new york': 0.1338,
    'north carolina': 0.1061,
    'north dakota': 0.1033,
    'ohio': 0.1297,
    'oklahoma': 0.1064,
    'oregon': 0.0917,
    'pennsylvania': 0.1222,
    'rhode island': 0.1346,
    'south carolina': 0.0880,
    'south dakota': 0.0979,
    'tennessee': 0.0795,
    'texas': 0.1117,
    'utah': 0.0953,
    'vermont': 0.1076,
    'virginia': 0.1089,
    'washington': 0.1169,
    'west virginia': 0.1038,
    'wisconsin': 0.1358,
    'wyoming': 0.0745,

  },
  standardMileageRate: 0.54,
  lunchAmount: 8.5,
  beerAmount: 10,
  costOfLivingAdjustment: {
    'denver': 1,
    'san francisco': 0.83,
    'new york city': 0.77,
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
    city = city.toLocaleLowerCase()
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

  costOfLivingCalculation: ({ salary, bonus, retirement, lunch, beer, distance, insurance, city, state }) => {
    city = state.toLocaleLowerCase()
    const adjustmentValue = Calc.costOfLivingAdjustment[city]
    const totalAdjustedIncomeAndBenefits = Calc.netIncomeAndBenefits(salary, bonus, retirement, lunch, beer, distance, insurance, city)
    return (adjustmentValue * totalAdjustedIncomeAndBenefits).toFixed(2)
  },
}

module.exports = Calc
