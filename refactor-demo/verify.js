const { calculateCartTotal } = require("./cart.js");

const cases = [
  [{ p: 50, q: 2 }, { p: 30, q: 1 }],
  [{ p: 150, q: 4 }, { p: 20, q: 3 }],
  [{ p: 200, q: 3 }, { p: 0, q: 5 }],
  [{ p: 10, q: -1 }, { p: 500, q: 1 }],
  [],
];

for (const items of cases) {
  console.log(JSON.stringify(items), "=>", calculateCartTotal(items));
}
