export async function f_A_A4_A0_A4_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A0_A4_A0_A4_A0.mjs').then(m => m.f_A_A4_A0_A4_A0_A4_A0()),
    import('./A4/A_A4_A0_A4_A0_A4_B1.mjs').then(m => m.f_A_A4_A0_A4_A0_A4_B1()),
    import('./A4/A_A4_A0_A4_A0_A4_C2.mjs').then(m => m.f_A_A4_A0_A4_A0_A4_C2()),
    import('./A4/A_A4_A0_A4_A0_A4_D3.mjs').then(m => m.f_A_A4_A0_A4_A0_A4_D3()),
    import('./A4/A_A4_A0_A4_A0_A4_A4.mjs').then(m => m.f_A_A4_A0_A4_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=5165855476;a-=5165855476;
a+=5994910458;a-=5994910458;
a+=8632846509;a-=8632846509;
a+=9052070529;a-=9052070529;
a+=5901049819;a-=5901049819;
a+=5786836992;a-=5786836992;
a+=1068435174;a-=1068435174;
;
  return a+100;
}
