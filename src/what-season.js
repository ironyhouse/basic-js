module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (Object.entries(date).length > 0) {
    throw new Error();
  }

  month = date.getMonth();
  if (0 <= month && month < 2 || month == 11) {
    return 'winter';
  } else if (2 <= month && month < 5) {
    return 'spring';
  } else if (5 <= month && month < 8) {
    return 'summer';
  } else if (8 <= month && month < 11) {
    return 'autumn';
  }
};
