function generateRandomno() {
  return `Random number  ${Math.floor(Math.random() * 100) + 1}`;
}

function twotables() {
  for (let i = 1; i <= 20; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
  }
}

module.exports = {
  generateRandomno,
  twotables,
};
