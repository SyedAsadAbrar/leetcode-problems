function longestCommonPrefix(strs: string[]): string {
  const positions: { [key: number]: string } = {};

  const matchingWords: Array<number> = [strs[0].length];
  let stopCounting = false;

  let commonIndex = 0;

  strs.forEach((str, outerIndex) => {
    str.split("").forEach((letter, index) => {
      if (!positions[index]) {
        positions[index] = letter;
      } else {
        if (positions[index] === letter && !stopCounting) {
          commonIndex += 1;
        } else {
          stopCounting = true;
        }
      }
    });
    if (!matchingWords[outerIndex] || stopCounting) {
      matchingWords.push(commonIndex);
      stopCounting = false;
    }
    commonIndex = 0;
  });
  return strs[0].substring(0, Math.min(...matchingWords));
}
