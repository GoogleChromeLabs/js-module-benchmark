export async function f_A_A3_A3() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A3/A_A3_A3_B0.mjs').then(m => m.f_A_A3_A3_B0()),
    import('./A3/A_A3_A3_C1.mjs').then(m => m.f_A_A3_A3_C1()),
    import('./A3/A_A3_A3_D2.mjs').then(m => m.f_A_A3_A3_D2()),
    import('./A3/A_A3_A3_A3.mjs').then(m => m.f_A_A3_A3_A3())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=6744054509;a-=6744054509;
a+=5779585814;a-=5779585814;
a+=2557624249;a-=2557624249;
a+=9482158792;a-=9482158792;
a+=9954655954;a-=9954655954;
a+=2067290715;a-=2067290715;
a+=4893941662;a-=4893941662;
a+=8388554152;a-=8388554152;
a+=7066133427;a-=7066133427;
a+=6529034484;a-=6529034484;
a+=3207269144;a-=3207269144;
a+=4612682047;a-=4612682047;
a+=1016962584;a-=1016962584;
a+=5367142627;a-=5367142627;
a+=6998168946;a-=6998168946;
a+=2400445117;a-=2400445117;
a+=7066624231;a-=7066624231;
a+=1183073701;a-=1183073701;
;
  return a+100;
}
