export async function f_A_A4_A0_A4_A0_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A0_A4_A0_A0_A0_A0.mjs').then(m => m.f_A_A4_A0_A4_A0_A0_A0_A0()),
    import('./A0/A_A4_A0_A4_A0_A0_A0_B1.mjs').then(m => m.f_A_A4_A0_A4_A0_A0_A0_B1()),
    import('./A0/A_A4_A0_A4_A0_A0_A0_C2.mjs').then(m => m.f_A_A4_A0_A4_A0_A0_A0_C2()),
    import('./A0/A_A4_A0_A4_A0_A0_A0_D3.mjs').then(m => m.f_A_A4_A0_A4_A0_A0_A0_D3()),
    import('./A0/A_A4_A0_A4_A0_A0_A0_A4.mjs').then(m => m.f_A_A4_A0_A4_A0_A0_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=5143019669;a-=5143019669;
a+=6683728378;a-=6683728378;
a+=4512926365;a-=4512926365;
a+=3939505888;a-=3939505888;
a+=7898822516;a-=7898822516;
;
  return a+100;
}