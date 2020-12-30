export async function f_A_A4_A4_A4_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A4_A4_A4_A0.mjs').then(m => m.f_A_A4_A4_A4_A4_A0()),
    import('./A4/A_A4_A4_A4_A4_B1.mjs').then(m => m.f_A_A4_A4_A4_A4_B1()),
    import('./A4/A_A4_A4_A4_A4_C2.mjs').then(m => m.f_A_A4_A4_A4_A4_C2()),
    import('./A4/A_A4_A4_A4_A4_D3.mjs').then(m => m.f_A_A4_A4_A4_A4_D3()),
    import('./A4/A_A4_A4_A4_A4_A4.mjs').then(m => m.f_A_A4_A4_A4_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=5862846016;a-=5862846016;
a+=3518040805;a-=3518040805;
a+=5143350553;a-=5143350553;
a+=3153737776;a-=3153737776;
a+=2254146957;a-=2254146957;
a+=3237595903;a-=3237595903;
a+=1441461150;a-=1441461150;
a+=7586321826;a-=7586321826;
a+=5739257986;a-=5739257986;
;
  return a+100;
}
