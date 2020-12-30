export async function f_A_A4_A0_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A0_A4_A0_A0.mjs').then(m => m.f_A_A4_A0_A4_A0_A0()),
    import('./A0/A_A4_A0_A4_A0_B1.mjs').then(m => m.f_A_A4_A0_A4_A0_B1()),
    import('./A0/A_A4_A0_A4_A0_C2.mjs').then(m => m.f_A_A4_A0_A4_A0_C2()),
    import('./A0/A_A4_A0_A4_A0_D3.mjs').then(m => m.f_A_A4_A0_A4_A0_D3()),
    import('./A0/A_A4_A0_A4_A0_A4.mjs').then(m => m.f_A_A4_A0_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=2758617283;a-=2758617283;
a+=9047302520;a-=9047302520;
a+=1701827112;a-=1701827112;
a+=1274130063;a-=1274130063;
a+=6407060916;a-=6407060916;
a+=7838950969;a-=7838950969;
a+=2417498320;a-=2417498320;
a+=7460277811;a-=7460277811;
a+=6423954878;a-=6423954878;
;
  return a+100;
}
