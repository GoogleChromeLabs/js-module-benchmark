export async function f_A_A4_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A4_A0.mjs').then(m => m.f_A_A4_A4_A0()),
    import('./A4/A_A4_A4_B1.mjs').then(m => m.f_A_A4_A4_B1()),
    import('./A4/A_A4_A4_C2.mjs').then(m => m.f_A_A4_A4_C2()),
    import('./A4/A_A4_A4_D3.mjs').then(m => m.f_A_A4_A4_D3()),
    import('./A4/A_A4_A4_A4.mjs').then(m => m.f_A_A4_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=2213139504;a-=2213139504;
a+=7353890796;a-=7353890796;
a+=9610057958;a-=9610057958;
a+=1201751772;a-=1201751772;
a+=3205061798;a-=3205061798;
a+=1051959906;a-=1051959906;
a+=6587453086;a-=6587453086;
a+=3746834795;a-=3746834795;
a+=5772452990;a-=5772452990;
a+=4354103187;a-=4354103187;
a+=6846083162;a-=6846083162;
a+=5955530928;a-=5955530928;
a+=3519775057;a-=3519775057;
a+=7796462165;a-=7796462165;
;
  return a+100;
}
