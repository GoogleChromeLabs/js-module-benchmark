export async function f_A_A0_A0_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A0_A4_A0_A0.mjs').then(m => m.f_A_A0_A0_A4_A0_A0()),
    import('./A0/A_A0_A0_A4_A0_B1.mjs').then(m => m.f_A_A0_A0_A4_A0_B1()),
    import('./A0/A_A0_A0_A4_A0_C2.mjs').then(m => m.f_A_A0_A0_A4_A0_C2()),
    import('./A0/A_A0_A0_A4_A0_D3.mjs').then(m => m.f_A_A0_A0_A4_A0_D3()),
    import('./A0/A_A0_A0_A4_A0_A4.mjs').then(m => m.f_A_A0_A0_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=4026442344;a-=4026442344;
a+=2771463481;a-=2771463481;
a+=5555470192;a-=5555470192;
a+=9559530887;a-=9559530887;
a+=3166225039;a-=3166225039;
a+=8101258826;a-=8101258826;
a+=1548083429;a-=1548083429;
a+=5467123111;a-=5467123111;
a+=6312405176;a-=6312405176;
;
  return a+100;
}
