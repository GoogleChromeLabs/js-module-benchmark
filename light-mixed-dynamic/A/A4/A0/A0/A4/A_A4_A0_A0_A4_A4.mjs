export async function f_A_A4_A0_A0_A4_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A0_A0_A4_A4_A0.mjs').then(m => m.f_A_A4_A0_A0_A4_A4_A0()),
    import('./A4/A_A4_A0_A0_A4_A4_B1.mjs').then(m => m.f_A_A4_A0_A0_A4_A4_B1()),
    import('./A4/A_A4_A0_A0_A4_A4_C2.mjs').then(m => m.f_A_A4_A0_A0_A4_A4_C2()),
    import('./A4/A_A4_A0_A0_A4_A4_D3.mjs').then(m => m.f_A_A4_A0_A0_A4_A4_D3()),
    import('./A4/A_A4_A0_A0_A4_A4_A4.mjs').then(m => m.f_A_A4_A0_A0_A4_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=6036678490;a-=6036678490;
a+=7881384980;a-=7881384980;
a+=8317184198;a-=8317184198;
a+=9045923184;a-=9045923184;
a+=2287118920;a-=2287118920;
a+=5256872153;a-=5256872153;
a+=5719751251;a-=5719751251;
;
  return a+100;
}