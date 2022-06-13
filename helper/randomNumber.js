
const ap = {}

ap.randomNumber = (max) => {
  const num = max;
  const randomnumber = Math.floor(Math.random() * num);
  return randomnumber;
};

module.exports = ap ;
