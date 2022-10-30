const ftoc = function(input) {
  let output;
  if (input < 0) {
    output = Math.round((((Math.abs(input) - 32) * (5 / 9)) * -1) * 10) / 10;
  } else {
    output = Math.round(((input - 32) * (5 / 9)) * 10) / 10;
  }
  return output;
};

const ctof = function(input) {
  let output;
  if (input < 0) {
    output = Math.round(((Math.abs(input) * (9 / 5) + 32) * -1) * 10) / 10;
  } else {
    output = Math.round((input * (9 / 5) + 32) * 10) / 10;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
