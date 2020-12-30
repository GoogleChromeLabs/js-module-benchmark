export async function f_A_A4_A4_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A4_A0_A4_A0.mjs').then(m => m.f_A_A4_A4_A0_A4_A0()),
    import('./A4/A_A4_A4_A0_A4_B1.mjs').then(m => m.f_A_A4_A4_A0_A4_B1()),
    import('./A4/A_A4_A4_A0_A4_C2.mjs').then(m => m.f_A_A4_A4_A0_A4_C2()),
    import('./A4/A_A4_A4_A0_A4_D3.mjs').then(m => m.f_A_A4_A4_A0_A4_D3()),
    import('./A4/A_A4_A4_A0_A4_A4.mjs').then(m => m.f_A_A4_A4_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=2778909072;a-=2778909072;
a+=9215470273;a-=9215470273;
a+=8113795765;a-=8113795765;
a+=5422477548;a-=5422477548;
a+=8707739278;a-=8707739278;
a+=7385005313;a-=7385005313;
a+=6612472331;a-=6612472331;
a+=9201219608;a-=9201219608;
a+=2693850331;a-=2693850331;
;
  return a+100;
}
