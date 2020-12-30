export async function f_A_A0_A0_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A0_A0_A4_A0.mjs').then(m => m.f_A_A0_A0_A0_A4_A0()),
    import('./A4/A_A0_A0_A0_A4_B1.mjs').then(m => m.f_A_A0_A0_A0_A4_B1()),
    import('./A4/A_A0_A0_A0_A4_C2.mjs').then(m => m.f_A_A0_A0_A0_A4_C2()),
    import('./A4/A_A0_A0_A0_A4_D3.mjs').then(m => m.f_A_A0_A0_A0_A4_D3()),
    import('./A4/A_A0_A0_A0_A4_A4.mjs').then(m => m.f_A_A0_A0_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=7337523065;a-=7337523065;
a+=1524479576;a-=1524479576;
a+=6400209772;a-=6400209772;
a+=1473429387;a-=1473429387;
a+=7673235874;a-=7673235874;
a+=5139070553;a-=5139070553;
a+=6626986480;a-=6626986480;
a+=9158672183;a-=9158672183;
a+=8062998512;a-=8062998512;
;
  return a+100;
}
