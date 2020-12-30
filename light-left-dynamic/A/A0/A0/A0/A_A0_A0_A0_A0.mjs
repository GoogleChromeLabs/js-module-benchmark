export async function f_A_A0_A0_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A0_A0_A0_A0.mjs').then(m => m.f_A_A0_A0_A0_A0_A0()),
    import('./A0/A_A0_A0_A0_A0_B1.mjs').then(m => m.f_A_A0_A0_A0_A0_B1()),
    import('./A0/A_A0_A0_A0_A0_C2.mjs').then(m => m.f_A_A0_A0_A0_A0_C2()),
    import('./A0/A_A0_A0_A0_A0_D3.mjs').then(m => m.f_A_A0_A0_A0_A0_D3())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=7463240152;a-=7463240152;
a+=5627810790;a-=5627810790;
a+=7621451601;a-=7621451601;
a+=7755569435;a-=7755569435;
a+=6174763898;a-=6174763898;
a+=1412219276;a-=1412219276;
a+=6462387744;a-=6462387744;
a+=9369859700;a-=9369859700;
a+=2672764879;a-=2672764879;
a+=8946621387;a-=8946621387;
a+=3954308174;a-=3954308174;
a+=9090524993;a-=9090524993;
a+=1127064451;a-=1127064451;
a+=8738854637;a-=8738854637;
a+=1075177745;a-=1075177745;
;
  return a+100;
}
