export async function f_A_A0_A0_A4_A0_A4_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A0_A4_A0_A4_A4_A0.mjs').then(m => m.f_A_A0_A0_A4_A0_A4_A4_A0()),
    import('./A4/A_A0_A0_A4_A0_A4_A4_B1.mjs').then(m => m.f_A_A0_A0_A4_A0_A4_A4_B1()),
    import('./A4/A_A0_A0_A4_A0_A4_A4_C2.mjs').then(m => m.f_A_A0_A0_A4_A0_A4_A4_C2()),
    import('./A4/A_A0_A0_A4_A0_A4_A4_D3.mjs').then(m => m.f_A_A0_A0_A4_A0_A4_A4_D3()),
    import('./A4/A_A0_A0_A4_A0_A4_A4_A4.mjs').then(m => m.f_A_A0_A0_A4_A0_A4_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=9973628410;a-=9973628410;
a+=8917990514;a-=8917990514;
a+=9807751768;a-=9807751768;
a+=4027247242;a-=4027247242;
a+=5884907924;a-=5884907924;
;
  return a+100;
}