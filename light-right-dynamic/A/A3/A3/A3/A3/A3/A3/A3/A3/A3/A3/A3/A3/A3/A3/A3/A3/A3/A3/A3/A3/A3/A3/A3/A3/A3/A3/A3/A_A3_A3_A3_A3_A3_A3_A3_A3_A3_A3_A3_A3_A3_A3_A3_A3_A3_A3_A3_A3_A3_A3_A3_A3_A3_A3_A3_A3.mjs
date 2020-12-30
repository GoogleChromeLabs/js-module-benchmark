export async function f_A_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A3/A_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_B0.mjs').then(m => m.f_A_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_B0()),
    import('./A3/A_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_C1.mjs').then(m => m.f_A_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_C1()),
    import('./A3/A_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_D2.mjs').then(m => m.f_A_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_D2()),
    import('./A3/A_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3.mjs').then(m => m.f_A_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3_A3())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;;
  return a+100;
}
