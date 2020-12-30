export async function f_A_A0_A4_A4_A4_A0_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A4_A4_A4_A0_A4_A0_A0.mjs').then(m => m.f_A_A0_A4_A4_A4_A0_A4_A0_A0()),
    import('./A0/A_A0_A4_A4_A4_A0_A4_A0_B1.mjs').then(m => m.f_A_A0_A4_A4_A4_A0_A4_A0_B1()),
    import('./A0/A_A0_A4_A4_A4_A0_A4_A0_C2.mjs').then(m => m.f_A_A0_A4_A4_A4_A0_A4_A0_C2()),
    import('./A0/A_A0_A4_A4_A4_A0_A4_A0_D3.mjs').then(m => m.f_A_A0_A4_A4_A4_A0_A4_A0_D3()),
    import('./A0/A_A0_A4_A4_A4_A0_A4_A0_A4.mjs').then(m => m.f_A_A0_A4_A4_A4_A0_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=1463339149;a-=1463339149;
a+=2103052584;a-=2103052584;
a+=7140822265;a-=7140822265;
;
  return a+100;
}
