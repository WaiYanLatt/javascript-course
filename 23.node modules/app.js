function app(a, b) {
  return a + b;
}

function sum(a, b) {
  if (b === 0) return "NO";
  else return a * b;
}

module.exports = {app, sum}
