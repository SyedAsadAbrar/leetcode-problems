const mapping = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s: string): number => {
  let carry = 0;
  let result = 0;
  const convertedString = s.split('').map((letter) => mapping[letter]);

  convertedString.forEach((number) => {
    console.log('number', number);
    if ([mapping.I, mapping.X, mapping.C].includes(number) && !carry) {
      console.log('no carry and special num found');
      carry = number;
    } else {
      console.log('else', carry);
      if (!carry) {
        result += number;
      } else {
        console.log('in case of add', carry + number, result);
        console.log('subtraction case', -carry + number, result);
        if (carry === mapping.I) {
          result += [mapping.V, mapping.X].includes(number)
            ? -carry + number
            : carry + number;
        } else if (carry === mapping.X) {
          result += [mapping.L, mapping.C].includes(number)
            ? -carry + number
            : carry + number;
        } else if (carry === mapping.C) {
          result += [mapping.D, mapping.M].includes(number)
            ? -carry + number
            : carry + number;
        } else {
          result += carry + number;
        }
        carry = 0;
      }
    }

    console.log('result', result);
  });
  return result + carry;
};
