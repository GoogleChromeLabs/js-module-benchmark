export async function f_A_A4_A0_A0_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A0_A0_A0_A0_A0.mjs').then(m => m.f_A_A4_A0_A0_A0_A0_A0()),
    import('./A0/A_A4_A0_A0_A0_A0_B1.mjs').then(m => m.f_A_A4_A0_A0_A0_A0_B1()),
    import('./A0/A_A4_A0_A0_A0_A0_C2.mjs').then(m => m.f_A_A4_A0_A0_A0_A0_C2()),
    import('./A0/A_A4_A0_A0_A0_A0_D3.mjs').then(m => m.f_A_A4_A0_A0_A0_A0_D3()),
    import('./A0/A_A4_A0_A0_A0_A0_A4.mjs').then(m => m.f_A_A4_A0_A0_A0_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=2683068270;a-=2683068270;
a+=3768305309;a-=3768305309;
a+=4000790165;a-=4000790165;
a+=4611280755;a-=4611280755;
a+=6501153433;a-=6501153433;
a+=6208102372;a-=6208102372;
a+=5793842999;a-=5793842999;
;
  return a+100;
}
