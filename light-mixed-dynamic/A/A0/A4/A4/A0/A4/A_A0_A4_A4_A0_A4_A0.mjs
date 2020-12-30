export async function f_A_A0_A4_A4_A0_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A4_A4_A0_A4_A0_A0.mjs').then(m => m.f_A_A0_A4_A4_A0_A4_A0_A0()),
    import('./A0/A_A0_A4_A4_A0_A4_A0_B1.mjs').then(m => m.f_A_A0_A4_A4_A0_A4_A0_B1()),
    import('./A0/A_A0_A4_A4_A0_A4_A0_C2.mjs').then(m => m.f_A_A0_A4_A4_A0_A4_A0_C2()),
    import('./A0/A_A0_A4_A4_A0_A4_A0_D3.mjs').then(m => m.f_A_A0_A4_A4_A0_A4_A0_D3()),
    import('./A0/A_A0_A4_A4_A0_A4_A0_A4.mjs').then(m => m.f_A_A0_A4_A4_A0_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=9941053021;a-=9941053021;
a+=1193407952;a-=1193407952;
a+=9373155618;a-=9373155618;
a+=6172846162;a-=6172846162;
a+=8380866812;a-=8380866812;
;
  return a+100;
}
