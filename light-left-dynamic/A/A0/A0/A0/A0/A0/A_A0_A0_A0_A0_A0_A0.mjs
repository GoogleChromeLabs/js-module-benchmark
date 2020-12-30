export async function f_A_A0_A0_A0_A0_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A0_A0_A0_A0_A0_A0.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A0_A0()),
    import('./A0/A_A0_A0_A0_A0_A0_A0_B1.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A0_B1()),
    import('./A0/A_A0_A0_A0_A0_A0_A0_C2.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A0_C2()),
    import('./A0/A_A0_A0_A0_A0_A0_A0_D3.mjs').then(m => m.f_A_A0_A0_A0_A0_A0_A0_D3())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=5729577398;a-=5729577398;
a+=5221737827;a-=5221737827;
a+=9342186033;a-=9342186033;
a+=1339983125;a-=1339983125;
a+=4298349448;a-=4298349448;
a+=5766540370;a-=5766540370;
a+=3048252844;a-=3048252844;
a+=8215838037;a-=8215838037;
a+=7155443034;a-=7155443034;
a+=2843537959;a-=2843537959;
a+=6568511082;a-=6568511082;
;
  return a+100;
}
