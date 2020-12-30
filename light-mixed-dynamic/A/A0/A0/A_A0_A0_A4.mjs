export async function f_A_A0_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A0_A4_A0.mjs').then(m => m.f_A_A0_A0_A4_A0()),
    import('./A4/A_A0_A0_A4_B1.mjs').then(m => m.f_A_A0_A0_A4_B1()),
    import('./A4/A_A0_A0_A4_C2.mjs').then(m => m.f_A_A0_A0_A4_C2()),
    import('./A4/A_A0_A0_A4_D3.mjs').then(m => m.f_A_A0_A0_A4_D3()),
    import('./A4/A_A0_A0_A4_A4.mjs').then(m => m.f_A_A0_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=1963376800;a-=1963376800;
a+=9150954746;a-=9150954746;
a+=2666101881;a-=2666101881;
a+=5307488591;a-=5307488591;
a+=7176810552;a-=7176810552;
a+=1158843604;a-=1158843604;
a+=8925903606;a-=8925903606;
a+=2167099315;a-=2167099315;
a+=2826403998;a-=2826403998;
a+=1991182633;a-=1991182633;
a+=5950836277;a-=5950836277;
;
  return a+100;
}
