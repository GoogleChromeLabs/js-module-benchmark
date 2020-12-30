export async function f_A() {
  let a=1;
  const results = await Promise.all([
    import('./A/A_B0.mjs').then(m => m.f_A_B0()),
    import('./A/A_C1.mjs').then(m => m.f_A_C1()),
    import('./A/A_D2.mjs').then(m => m.f_A_D2()),
    import('./A/A_A3.mjs').then(m => m.f_A_A3())
  ]);
  for (let result of results) a += result;
  return a;
}
