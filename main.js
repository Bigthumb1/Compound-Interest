function calculateCi(p, r, n) {
  let c = p * (1 + r) ** n;
  var interest = c - p;
  return interest;
}
console.log(calculateCi(10000, 0.12, 3).toFixed(3));
