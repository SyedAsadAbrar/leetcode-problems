// https://leetcode.com/problems/reverse-words-in-a-string

function reverseWords(s: string): string {
  return s
    .split(" ")
    .filter((str) => str.length)
    .map((str) => str.trim())
    .reverse()
    .join(" ");
}
