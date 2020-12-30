export async function f_A_A4_A0_A4_A4_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A0_A4_A4_A4_A0.mjs').then(m => m.f_A_A4_A0_A4_A4_A4_A0()),
    import('./A4/A_A4_A0_A4_A4_A4_B1.mjs').then(m => m.f_A_A4_A0_A4_A4_A4_B1()),
    import('./A4/A_A4_A0_A4_A4_A4_C2.mjs').then(m => m.f_A_A4_A0_A4_A4_A4_C2()),
    import('./A4/A_A4_A0_A4_A4_A4_D3.mjs').then(m => m.f_A_A4_A0_A4_A4_A4_D3()),
    import('./A4/A_A4_A0_A4_A4_A4_A4.mjs').then(m => m.f_A_A4_A0_A4_A4_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=6712456919;a-=6712456919;
a+=1206711779;a-=1206711779;
a+=3931462897;a-=3931462897;
a+=8169331450;a-=8169331450;
a+=5741281972;a-=5741281972;
a+=6027282538;a-=6027282538;
a+=4929108236;a-=4929108236;
;
  return a+100;
}
