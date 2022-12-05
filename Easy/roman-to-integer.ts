const mapping: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s: string): number => {
  let result = 0;
  const convertedString = s.split("").map((letter) => mapping[letter]);

  let index = 0;
  let first: number;
  let second: number;

  console.log(convertedString);

  while (index <= convertedString.length - 2) {
    first = convertedString[index];
    second = convertedString[index + 1];
    if (first >= second) {
      result += first;
    } else {
      result += second - first;
      index += 1;
    }
    index += 1;
  }

  return result + (convertedString[index] || 0);
};
