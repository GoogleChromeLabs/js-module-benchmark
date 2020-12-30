export async function f_A_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A4_A0.mjs').then(m => m.f_A_A0_A4_A0()),
    import('./A4/A_A0_A4_B1.mjs').then(m => m.f_A_A0_A4_B1()),
    import('./A4/A_A0_A4_C2.mjs').then(m => m.f_A_A0_A4_C2()),
    import('./A4/A_A0_A4_D3.mjs').then(m => m.f_A_A0_A4_D3()),
    import('./A4/A_A0_A4_A4.mjs').then(m => m.f_A_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=2946012119;a-=2946012119;
a+=7369438711;a-=7369438711;
a+=1508846687;a-=1508846687;
a+=9859858293;a-=9859858293;
a+=2441359503;a-=2441359503;
a+=6322708724;a-=6322708724;
a+=5313186025;a-=5313186025;
a+=3910411320;a-=3910411320;
a+=1701242008;a-=1701242008;
a+=6910525912;a-=6910525912;
a+=1338243862;a-=1338243862;
a+=8482179023;a-=8482179023;
a+=2238087357;a-=2238087357;
a+=9434902451;a-=9434902451;
;
  return a+100;
}
