export async function f_A_A4_A4_A0_A0_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A4_A0_A0_A4_A0_A0.mjs').then(m => m.f_A_A4_A4_A0_A0_A4_A0_A0()),
    import('./A0/A_A4_A4_A0_A0_A4_A0_B1.mjs').then(m => m.f_A_A4_A4_A0_A0_A4_A0_B1()),
    import('./A0/A_A4_A4_A0_A0_A4_A0_C2.mjs').then(m => m.f_A_A4_A4_A0_A0_A4_A0_C2()),
    import('./A0/A_A4_A4_A0_A0_A4_A0_D3.mjs').then(m => m.f_A_A4_A4_A0_A0_A4_A0_D3()),
    import('./A0/A_A4_A4_A0_A0_A4_A0_A4.mjs').then(m => m.f_A_A4_A4_A0_A0_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=5768874912;a-=5768874912;
a+=3285413826;a-=3285413826;
a+=7612663689;a-=7612663689;
a+=4367314819;a-=4367314819;
a+=2007325337;a-=2007325337;
;
  return a+100;
}
