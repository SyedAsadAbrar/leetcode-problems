// promiseLimit
// Not a leetcode problem

// GET www.a.com/api/resource-1
// GET www.a.com/api/resource-2
// ...
// GET www.a.com/api/resource-10

// max 3 requests in parallel, returns when all requests completes

async function runWithConcurrencyLimit<T>(
  tasks: (() => Promise<T>)[],
  concurrency: number
): Promise<T[]> {
  const results: T[] = new Array(tasks.length);
  let nextIndex = 0;

  const actualConcurrency = Math.min(concurrency, tasks.length);

  async function worker() {
    while (true) {
      let currentIndex: number;

      if (nextIndex >= tasks.length) break;
      currentIndex = nextIndex++;

      try {
        results[currentIndex] = await tasks[currentIndex]();
      } catch (err) {
        throw err;
      }
    }
  }

  const workers = Array.from({ length: actualConcurrency }, () => worker());

  await Promise.all(workers);
  return results;
}

// const tasks = Array.from(
//   { length: 10 },
//   (_, i) => () =>
//     new Promise<string>((res) => {
//       const delay = Math.random() * 2000;
//       setTimeout(
//         () => res(`Task ${i + 1} done in ${delay.toFixed(0)}ms`),
//         delay
//       );
//     })
// );

// runWithConcurrencyLimit(tasks, 3).then(console.log);
