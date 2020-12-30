export async function f_A_A0_A4_A4_A4_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A4_A4_A4_A4_A0.mjs').then(m => m.f_A_A0_A4_A4_A4_A4_A0()),
    import('./A4/A_A0_A4_A4_A4_A4_B1.mjs').then(m => m.f_A_A0_A4_A4_A4_A4_B1()),
    import('./A4/A_A0_A4_A4_A4_A4_C2.mjs').then(m => m.f_A_A0_A4_A4_A4_A4_C2()),
    import('./A4/A_A0_A4_A4_A4_A4_D3.mjs').then(m => m.f_A_A0_A4_A4_A4_A4_D3()),
    import('./A4/A_A0_A4_A4_A4_A4_A4.mjs').then(m => m.f_A_A0_A4_A4_A4_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=7744766539;a-=7744766539;
a+=3690155832;a-=3690155832;
a+=9828228455;a-=9828228455;
a+=9576354077;a-=9576354077;
a+=6291743069;a-=6291743069;
a+=7560936266;a-=7560936266;
a+=1165392570;a-=1165392570;
;
  return a+100;
}
