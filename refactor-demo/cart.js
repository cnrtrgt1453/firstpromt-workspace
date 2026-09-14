function calculateBulkDiscount(items) {
  let bulkDiscount = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].q > 0 && items[i].p > 100) {
      bulkDiscount = bulkDiscount + items[i].p * items[i].q * 0.1;
    }
  }
  return bulkDiscount;
}

function calculateCartTotal(items) {
  let subtotal = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].q > 0) {
      subtotal = subtotal + items[i].p * items[i].q;
    }
  }
  const bulkDiscount = calculateBulkDiscount(items);
  const largeOrderDiscount = subtotal > 500 ? 20 : 0;
  return subtotal - bulkDiscount - largeOrderDiscount;
}

module.exports = { calculateCartTotal };
