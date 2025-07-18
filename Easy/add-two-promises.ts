// https://leetcode.com/problems/add-two-promises/

type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  const result = await Promise.all([promise1, promise2]);
  return result[0] + result[1];
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
