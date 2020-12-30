export async function f_A_A4_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A4_A0_A0.mjs').then(m => m.f_A_A4_A4_A0_A0()),
    import('./A0/A_A4_A4_A0_B1.mjs').then(m => m.f_A_A4_A4_A0_B1()),
    import('./A0/A_A4_A4_A0_C2.mjs').then(m => m.f_A_A4_A4_A0_C2()),
    import('./A0/A_A4_A4_A0_D3.mjs').then(m => m.f_A_A4_A4_A0_D3()),
    import('./A0/A_A4_A4_A0_A4.mjs').then(m => m.f_A_A4_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=3206828888;a-=3206828888;
a+=3842244265;a-=3842244265;
a+=5014093083;a-=5014093083;
a+=8864379125;a-=8864379125;
a+=6288819906;a-=6288819906;
a+=7188489599;a-=7188489599;
a+=6384700881;a-=6384700881;
a+=5599088231;a-=5599088231;
a+=8365670704;a-=8365670704;
a+=1237079101;a-=1237079101;
a+=6534411860;a-=6534411860;
;
  return a+100;
}
