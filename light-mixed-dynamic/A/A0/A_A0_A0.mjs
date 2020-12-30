export async function f_A_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A0_A0.mjs').then(m => m.f_A_A0_A0_A0()),
    import('./A0/A_A0_A0_B1.mjs').then(m => m.f_A_A0_A0_B1()),
    import('./A0/A_A0_A0_C2.mjs').then(m => m.f_A_A0_A0_C2()),
    import('./A0/A_A0_A0_D3.mjs').then(m => m.f_A_A0_A0_D3()),
    import('./A0/A_A0_A0_A4.mjs').then(m => m.f_A_A0_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=6157869696;a-=6157869696;
a+=3789261407;a-=3789261407;
a+=1846133834;a-=1846133834;
a+=9116623344;a-=9116623344;
a+=5195479808;a-=5195479808;
a+=3289787953;a-=3289787953;
a+=3885626099;a-=3885626099;
a+=2126428312;a-=2126428312;
a+=9736514513;a-=9736514513;
a+=8304889119;a-=8304889119;
a+=7338012573;a-=7338012573;
a+=9161361480;a-=9161361480;
a+=9897116584;a-=9897116584;
a+=9346092504;a-=9346092504;
;
  return a+100;
}
