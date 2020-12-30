export async function f_A_A0_A0_A4_A4_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A0_A4_A4_A4_A0_A0.mjs').then(m => m.f_A_A0_A0_A4_A4_A4_A0_A0()),
    import('./A0/A_A0_A0_A4_A4_A4_A0_B1.mjs').then(m => m.f_A_A0_A0_A4_A4_A4_A0_B1()),
    import('./A0/A_A0_A0_A4_A4_A4_A0_C2.mjs').then(m => m.f_A_A0_A0_A4_A4_A4_A0_C2()),
    import('./A0/A_A0_A0_A4_A4_A4_A0_D3.mjs').then(m => m.f_A_A0_A0_A4_A4_A4_A0_D3()),
    import('./A0/A_A0_A0_A4_A4_A4_A0_A4.mjs').then(m => m.f_A_A0_A0_A4_A4_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=4272693755;a-=4272693755;
a+=9177529492;a-=9177529492;
a+=1123372763;a-=1123372763;
a+=4886406382;a-=4886406382;
a+=4467601994;a-=4467601994;
;
  return a+100;
}
