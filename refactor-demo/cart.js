function calc(a) {
  let t = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i].q > 0) {
      t = t + a[i].p * a[i].q;
    }
  }
  let t2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i].q > 0 && a[i].p > 100) {
      t2 = t2 + a[i].p * a[i].q * 0.1;
    }
  }
  let final;
  if (t > 500) {
    if (t2 > 0) {
      final = t - t2 - 20;
    } else {
      final = t - 20;
    }
  } else {
    if (t2 > 0) {
      final = t - t2;
    } else {
      final = t;
    }
  }
  return final;
}

module.exports = { calc };
