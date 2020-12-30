export async function f_A_A0_A4_A0_A4_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A4_A0_A4_A0_A4_A0.mjs').then(m => m.f_A_A0_A4_A0_A4_A0_A4_A0()),
    import('./A4/A_A0_A4_A0_A4_A0_A4_B1.mjs').then(m => m.f_A_A0_A4_A0_A4_A0_A4_B1()),
    import('./A4/A_A0_A4_A0_A4_A0_A4_C2.mjs').then(m => m.f_A_A0_A4_A0_A4_A0_A4_C2()),
    import('./A4/A_A0_A4_A0_A4_A0_A4_D3.mjs').then(m => m.f_A_A0_A4_A0_A4_A0_A4_D3()),
    import('./A4/A_A0_A4_A0_A4_A0_A4_A4.mjs').then(m => m.f_A_A0_A4_A0_A4_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=9112880545;a-=9112880545;
a+=2693943869;a-=2693943869;
a+=1563250884;a-=1563250884;
a+=9889581762;a-=9889581762;
a+=1277291426;a-=1277291426;
;
  return a+100;
}
