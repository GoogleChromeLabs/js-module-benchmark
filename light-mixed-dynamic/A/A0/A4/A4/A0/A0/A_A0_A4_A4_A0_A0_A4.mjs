export async function f_A_A0_A4_A4_A0_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A4_A4_A0_A0_A4_A0.mjs').then(m => m.f_A_A0_A4_A4_A0_A0_A4_A0()),
    import('./A4/A_A0_A4_A4_A0_A0_A4_B1.mjs').then(m => m.f_A_A0_A4_A4_A0_A0_A4_B1()),
    import('./A4/A_A0_A4_A4_A0_A0_A4_C2.mjs').then(m => m.f_A_A0_A4_A4_A0_A0_A4_C2()),
    import('./A4/A_A0_A4_A4_A0_A0_A4_D3.mjs').then(m => m.f_A_A0_A4_A4_A0_A0_A4_D3()),
    import('./A4/A_A0_A4_A4_A0_A0_A4_A4.mjs').then(m => m.f_A_A0_A4_A4_A0_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=4804386033;a-=4804386033;
a+=5383344563;a-=5383344563;
a+=9347994339;a-=9347994339;
a+=3846691405;a-=3846691405;
a+=7130299378;a-=7130299378;
;
  return a+100;
}
