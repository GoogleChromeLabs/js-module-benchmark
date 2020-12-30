export async function f_A() {
  let a=1;
  const results = await Promise.all([
    import('./A/A_A0.mjs').then(m => m.f_A_A0()),
    import('./A/A_B1.mjs').then(m => m.f_A_B1()),
    import('./A/A_C2.mjs').then(m => m.f_A_C2()),
    import('./A/A_D3.mjs').then(m => m.f_A_D3()),
    import('./A/A_A4.mjs').then(m => m.f_A_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
