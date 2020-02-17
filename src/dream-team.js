module.exports = function createDreamTeam(members) {
  let teamName = [];
  if (!Array.isArray(members) ) {return false}
  members = members.filter(val => typeof val === 'string');
  
  for (let i = 0; i < members.length; i++) {
    members[i] = members[i].trim();
    teamName.push(members[i][0])
  }
  // for should handle non-standard cases
  return teamName.join('').toUpperCase().split('').sort().join('');
};