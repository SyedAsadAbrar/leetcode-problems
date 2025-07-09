// https://leetcode.com/problems/maximum-odd-binary-number/

const nLetterString = (n: number, letter: string) =>
  [...Array(n).keys()].map((_) => letter).join("");

function maximumOddBinaryNumber(s: string): string {
  const count = new Map<string, number>();
  let str = "1";

  [...s].forEach((char) => {
    count.set(char, (count.get(char) ?? 0) + 1);
  });

  if (count.has("1") && count.get("1") > 0) {
    count.set("1", count.get("1") - 1);
  }

  str = `${nLetterString(count.get("1") ?? 0, "1")}${nLetterString(
    count.get("0") ?? 0,
    "0"
  )}${str}`;

  return str;
}
