export async function f_A_A3_A3_A3_A3_A3() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A3/A_A3_A3_A3_A3_A3_B0.mjs').then(m => m.f_A_A3_A3_A3_A3_A3_B0()),
    import('./A3/A_A3_A3_A3_A3_A3_C1.mjs').then(m => m.f_A_A3_A3_A3_A3_A3_C1()),
    import('./A3/A_A3_A3_A3_A3_A3_D2.mjs').then(m => m.f_A_A3_A3_A3_A3_A3_D2()),
    import('./A3/A_A3_A3_A3_A3_A3_A3.mjs').then(m => m.f_A_A3_A3_A3_A3_A3_A3())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=8089457938;a-=8089457938;
a+=2089232055;a-=2089232055;
a+=8450111881;a-=8450111881;
a+=7273829850;a-=7273829850;
a+=4641374836;a-=4641374836;
a+=9019139343;a-=9019139343;
a+=4075064801;a-=4075064801;
a+=9592667216;a-=9592667216;
a+=6184666418;a-=6184666418;
a+=2303615198;a-=2303615198;
a+=4424850581;a-=4424850581;
a+=5749446404;a-=5749446404;
a+=7517514759;a-=7517514759;
;
  return a+100;
}
