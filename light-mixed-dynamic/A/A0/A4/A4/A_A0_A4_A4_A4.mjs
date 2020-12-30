export async function f_A_A0_A4_A4_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A4_A4_A4_A0.mjs').then(m => m.f_A_A0_A4_A4_A4_A0()),
    import('./A4/A_A0_A4_A4_A4_B1.mjs').then(m => m.f_A_A0_A4_A4_A4_B1()),
    import('./A4/A_A0_A4_A4_A4_C2.mjs').then(m => m.f_A_A0_A4_A4_A4_C2()),
    import('./A4/A_A0_A4_A4_A4_D3.mjs').then(m => m.f_A_A0_A4_A4_A4_D3()),
    import('./A4/A_A0_A4_A4_A4_A4.mjs').then(m => m.f_A_A0_A4_A4_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=5599058367;a-=5599058367;
a+=2852997935;a-=2852997935;
a+=9155487758;a-=9155487758;
a+=9530912761;a-=9530912761;
a+=7883222966;a-=7883222966;
a+=3202078099;a-=3202078099;
a+=9015514949;a-=9015514949;
a+=6948529485;a-=6948529485;
a+=4982614594;a-=4982614594;
;
  return a+100;
}
