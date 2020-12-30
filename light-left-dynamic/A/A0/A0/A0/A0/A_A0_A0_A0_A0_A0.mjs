export async function f_A_A0_A0_A0_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A0_A0_A0_A0_A0.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A0()),
    import('./A0/A_A0_A0_A0_A0_A0_B1.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_B1()),
    import('./A0/A_A0_A0_A0_A0_A0_C2.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_C2()),
    import('./A0/A_A0_A0_A0_A0_A0_D3.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_D3())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=3703376644;a-=3703376644;
a+=4290069566;a-=4290069566;
a+=7956829783;a-=7956829783;
a+=3165385490;a-=3165385490;
a+=6306190519;a-=6306190519;
a+=7467397644;a-=7467397644;
a+=9450213551;a-=9450213551;
a+=8199991054;a-=8199991054;
a+=2601733770;a-=2601733770;
a+=2903086753;a-=2903086753;
a+=7878688567;a-=7878688567;
a+=7446032305;a-=7446032305;
a+=5730193212;a-=5730193212;
;
  return a+100;
}
