export async function f_A_A0_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A0_A0_A0.mjs').then(m => m.f_A_A0_A0_A0_A0()),
    import('./A0/A_A0_A0_A0_B1.mjs').then(m => m.f_A_A0_A0_A0_B1()),
    import('./A0/A_A0_A0_A0_C2.mjs').then(m => m.f_A_A0_A0_A0_C2()),
    import('./A0/A_A0_A0_A0_D3.mjs').then(m => m.f_A_A0_A0_A0_D3())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=5039864233;a-=5039864233;
a+=7388776494;a-=7388776494;
a+=3234528726;a-=3234528726;
a+=9869832894;a-=9869832894;
a+=2435990144;a-=2435990144;
a+=1984875459;a-=1984875459;
a+=8621064980;a-=8621064980;
a+=2021410597;a-=2021410597;
a+=9107322466;a-=9107322466;
a+=2518289341;a-=2518289341;
a+=8606366299;a-=8606366299;
a+=2021258064;a-=2021258064;
a+=2272671387;a-=2272671387;
a+=5496593252;a-=5496593252;
a+=5451846781;a-=5451846781;
a+=9598412543;a-=9598412543;
;
  return a+100;
}
