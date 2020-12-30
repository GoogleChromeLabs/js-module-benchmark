export async function f_A_A4_A0_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A0_A0_A4_A0.mjs').then(m => m.f_A_A4_A0_A0_A4_A0()),
    import('./A4/A_A4_A0_A0_A4_B1.mjs').then(m => m.f_A_A4_A0_A0_A4_B1()),
    import('./A4/A_A4_A0_A0_A4_C2.mjs').then(m => m.f_A_A4_A0_A0_A4_C2()),
    import('./A4/A_A4_A0_A0_A4_D3.mjs').then(m => m.f_A_A4_A0_A0_A4_D3()),
    import('./A4/A_A4_A0_A0_A4_A4.mjs').then(m => m.f_A_A4_A0_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=8230960480;a-=8230960480;
a+=5473917108;a-=5473917108;
a+=5086817676;a-=5086817676;
a+=2944836011;a-=2944836011;
a+=5688886856;a-=5688886856;
a+=7551410654;a-=7551410654;
a+=7893838265;a-=7893838265;
a+=6612483974;a-=6612483974;
a+=9790362564;a-=9790362564;
;
  return a+100;
}
