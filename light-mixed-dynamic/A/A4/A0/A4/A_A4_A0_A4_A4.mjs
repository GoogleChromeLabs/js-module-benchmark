export async function f_A_A4_A0_A4_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A0_A4_A4_A0.mjs').then(m => m.f_A_A4_A0_A4_A4_A0()),
    import('./A4/A_A4_A0_A4_A4_B1.mjs').then(m => m.f_A_A4_A0_A4_A4_B1()),
    import('./A4/A_A4_A0_A4_A4_C2.mjs').then(m => m.f_A_A4_A0_A4_A4_C2()),
    import('./A4/A_A4_A0_A4_A4_D3.mjs').then(m => m.f_A_A4_A0_A4_A4_D3()),
    import('./A4/A_A4_A0_A4_A4_A4.mjs').then(m => m.f_A_A4_A0_A4_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=3894457359;a-=3894457359;
a+=8063368470;a-=8063368470;
a+=4648001629;a-=4648001629;
a+=9150292320;a-=9150292320;
a+=6342615669;a-=6342615669;
a+=4458462638;a-=4458462638;
a+=1729452055;a-=1729452055;
a+=5021191979;a-=5021191979;
a+=8213088774;a-=8213088774;
;
  return a+100;
}
