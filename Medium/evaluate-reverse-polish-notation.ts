// https://leetcode.com/problems/evaluate-reverse-polish-notation/

function evalRPN(tokens: string[]): number {
  console.log("evalRPN", tokens);

  const VALID_OPERATORS = ["+", "-", "*", "/"];
  const stack: number[] = [];

  tokens.forEach((token) => {
    if (VALID_OPERATORS.includes(token)) {
      const second = stack.pop();
      const first = stack.pop();
      if (first !== undefined && second !== undefined) {
        switch (token) {
          case "+":
            stack.push(first + second);
            break;
          case "-":
            stack.push(first - second);
            break;
          case "*":
            stack.push(first * second);
            break;
          case "/":
            const answer = first / second;
            stack.push(~~answer);
            break;
          default:
            break;
        }
      }
    } else {
      stack.push(Number(token));
    }
  });

  return stack[0];
}

// evalRPN(["4", "13", "5", "/", "+"]);
