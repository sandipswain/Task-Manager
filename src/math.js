const calculate = (total, tipPercent) => {
  const tip = total * tipPercent;
  return total + tip;
};

module.exports = {
  calculate,
};
