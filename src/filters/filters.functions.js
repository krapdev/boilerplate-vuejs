export const toDecimal2 = value => (Math.round(value * 100) / 100).toFixed(2);

export const toUSD = value => `${value} $`;
