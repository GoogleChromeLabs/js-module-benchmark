export async function f_A() {
  let a=1;
  const results = await Promise.all([
    import('./A/A_B0.mjs').then(m => m.f_A_B0()),
    import('./A/A_A1.mjs').then(m => m.f_A_A1()),
    import('./A/A_C2.mjs').then(m => m.f_A_C2())
  ]);
  for (let result of results) a += result;
  return a;
}
