export const cons = (a, b) => (message) => {
  switch (message) {
    case 'car':
      return a;
    case 'cdr':
      return b;
    default:
      return 'упс';
  }
};
export const car = (pair) => pair('car');
export const cdr = (pair) => pair('cdr');
