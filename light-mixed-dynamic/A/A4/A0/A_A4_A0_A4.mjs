export async function f_A_A4_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A0_A4_A0.mjs').then(m => m.f_A_A4_A0_A4_A0()),
    import('./A4/A_A4_A0_A4_B1.mjs').then(m => m.f_A_A4_A0_A4_B1()),
    import('./A4/A_A4_A0_A4_C2.mjs').then(m => m.f_A_A4_A0_A4_C2()),
    import('./A4/A_A4_A0_A4_D3.mjs').then(m => m.f_A_A4_A0_A4_D3()),
    import('./A4/A_A4_A0_A4_A4.mjs').then(m => m.f_A_A4_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=2049039592;a-=2049039592;
a+=7492003036;a-=7492003036;
a+=9990723816;a-=9990723816;
a+=1355595945;a-=1355595945;
a+=1392651221;a-=1392651221;
a+=6458088754;a-=6458088754;
a+=8481721077;a-=8481721077;
a+=8795553828;a-=8795553828;
a+=6642369177;a-=6642369177;
a+=6536065761;a-=6536065761;
a+=1565380935;a-=1565380935;
;
  return a+100;
}
