const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if ((sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) ||
      typeof sampleActivity != 'string' ||
      /[a-zA-Z]/.test(sampleActivity)) {
  return false;
  }
  return Math.ceil( Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / K);
};