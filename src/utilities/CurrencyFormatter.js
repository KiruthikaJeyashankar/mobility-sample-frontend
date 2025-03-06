const convertToCurrencyText = (amount, currencyType) => {
  let currencyFormat;
  if (currencyType === 'INR') {
    currencyFormat = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    });
  } else if (currencyType === 'PHP') {
    currencyFormat = new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0,
    });
  }
  return currencyFormat.format(amount);
};

export default {
  convertToCurrencyText,
};
