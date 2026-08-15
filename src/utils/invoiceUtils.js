export function calculateSubtotal(items) {
  return items.reduce((total, item) => {
    return total + Number(item.quantity || 0) * Number(item.rate || 0);
  }, 0);
}

export function calculateTax(subtotal, taxRate) {
  return subtotal * (Number(taxRate || 0) / 100);
}

export function calculateTotal(items, taxRate) {
  const subtotal = calculateSubtotal(items);
  const tax = calculateTax(subtotal, taxRate);

  return subtotal + tax;
}

export function formatCurrency(amount) {
  return `₹${Number(amount || 0).toFixed(2)}`;
}