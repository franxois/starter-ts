export const fibonnaci = (n: number): number => {
  if (n === 1 || n === 0) return 1;

  return fibonnaci(n - 1) + fibonnaci(n - 2);
};

export const fibonnaciLoop = (n: number): number => {
  let f_1 = 0;
  let f_2 = 1;

  if (n === 0 || n === 1) return 1;

  for (let i = 0; i < n; i++) {
    const f = f_1 + f_2;
    f_1 = f_2;
    f_2 = f;
  }

  return f_2;
};
