const lengthOfLongestSubstring = (s: string): number => {
  let end = 0;
  let start = end;

  let length = 0;
  let frequency = {};

  while (end < s.length) {
    const letter = s[end];
    if (frequency[letter]) {
      length = Math.max(length, end - start);
      delete frequency[s[start]];
      start += 1;
    } else {
      end += 1;
      frequency[letter] = 1;
    }
  }

  return Math.max(length, end - start);
};

// Test cases
lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('bbbbb');
lengthOfLongestSubstring('pwwkew');
lengthOfLongestSubstring('dvdf');
