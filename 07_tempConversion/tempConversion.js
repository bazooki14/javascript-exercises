const ftoc = function(input) {
  let output = Math.round(((input - 32) * (5 / 9)) * 10) / 10;
  return output;
};

const ctof = function(input) {
  let output = Math.round((input * (9 / 5) + 32) * 10) / 10;
  return output;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
