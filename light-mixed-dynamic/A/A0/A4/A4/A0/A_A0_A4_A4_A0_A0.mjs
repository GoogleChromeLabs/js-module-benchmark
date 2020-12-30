export async function f_A_A0_A4_A4_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A4_A4_A0_A0_A0.mjs').then(m => m.f_A_A0_A4_A4_A0_A0_A0()),
    import('./A0/A_A0_A4_A4_A0_A0_B1.mjs').then(m => m.f_A_A0_A4_A4_A0_A0_B1()),
    import('./A0/A_A0_A4_A4_A0_A0_C2.mjs').then(m => m.f_A_A0_A4_A4_A0_A0_C2()),
    import('./A0/A_A0_A4_A4_A0_A0_D3.mjs').then(m => m.f_A_A0_A4_A4_A0_A0_D3()),
    import('./A0/A_A0_A4_A4_A0_A0_A4.mjs').then(m => m.f_A_A0_A4_A4_A0_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=4657501794;a-=4657501794;
a+=5932389133;a-=5932389133;
a+=4736604386;a-=4736604386;
a+=7929493007;a-=7929493007;
a+=6850694260;a-=6850694260;
a+=3700647171;a-=3700647171;
a+=9909351858;a-=9909351858;
;
  return a+100;
}
