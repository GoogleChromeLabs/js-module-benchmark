export async function f_A_A4_A0_A4_A4_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A0_A4_A4_A0_A4_A0.mjs').then(m => m.f_A_A4_A0_A4_A4_A0_A4_A0()),
    import('./A4/A_A4_A0_A4_A4_A0_A4_B1.mjs').then(m => m.f_A_A4_A0_A4_A4_A0_A4_B1()),
    import('./A4/A_A4_A0_A4_A4_A0_A4_C2.mjs').then(m => m.f_A_A4_A0_A4_A4_A0_A4_C2()),
    import('./A4/A_A4_A0_A4_A4_A0_A4_D3.mjs').then(m => m.f_A_A4_A0_A4_A4_A0_A4_D3()),
    import('./A4/A_A4_A0_A4_A4_A0_A4_A4.mjs').then(m => m.f_A_A4_A0_A4_A4_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=6113737564;a-=6113737564;
a+=8901186798;a-=8901186798;
a+=3702196936;a-=3702196936;
a+=2318066760;a-=2318066760;
a+=9241575326;a-=9241575326;
;
  return a+100;
}
