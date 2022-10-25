export const withRateLimiter = <T extends Array<any>, U>(
  fn: (...args: T) => U,
  { limitValue, limitTime } = { limitValue: 5, limitTime: 1000 }
) => {
  let timer: NodeJS.Timeout;
  let q: Function[] = [];

  const exhaustQ = () => {
    timer = setTimeout(() => {
      if (q.length) {
        for (let i = 0; i < limitValue; i++) {
          const element = q.shift();
          element?.();
        }
      }

      if (q.length) {
        exhaustQ();
      }
    }, limitTime);
  };

  const limited = (...args: T) => {
    const p = new Promise<U>((res) => {
      q.push(() => res(fn(...args)));
    });

    if (!timer) {
      exhaustQ();
    }

    return p;
  };

  return limited;
};
