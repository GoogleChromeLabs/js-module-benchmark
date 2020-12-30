export async function f_A_A4_A4_A0_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A4_A0_A0_A0_A0.mjs').then(m => m.f_A_A4_A4_A0_A0_A0_A0()),
    import('./A0/A_A4_A4_A0_A0_A0_B1.mjs').then(m => m.f_A_A4_A4_A0_A0_A0_B1()),
    import('./A0/A_A4_A4_A0_A0_A0_C2.mjs').then(m => m.f_A_A4_A4_A0_A0_A0_C2()),
    import('./A0/A_A4_A4_A0_A0_A0_D3.mjs').then(m => m.f_A_A4_A4_A0_A0_A0_D3()),
    import('./A0/A_A4_A4_A0_A0_A0_A4.mjs').then(m => m.f_A_A4_A4_A0_A0_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=9713033013;a-=9713033013;
a+=7197100008;a-=7197100008;
a+=1979959990;a-=1979959990;
a+=8056565970;a-=8056565970;
a+=4798372974;a-=4798372974;
a+=8960285076;a-=8960285076;
a+=4800359976;a-=4800359976;
;
  return a+100;
}
