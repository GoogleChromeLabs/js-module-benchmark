export async function f_A_A0_A0_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A0_A0_A0_A0.mjs').then(m => m.f_A_A0_A0_A0_A0()),
    import('./A0/A_A0_A0_A0_B1.mjs').then(m => m.f_A_A0_A0_A0_B1()),
    import('./A0/A_A0_A0_A0_C2.mjs').then(m => m.f_A_A0_A0_A0_C2()),
    import('./A0/A_A0_A0_A0_D3.mjs').then(m => m.f_A_A0_A0_A0_D3()),
    import('./A0/A_A0_A0_A0_A4.mjs').then(m => m.f_A_A0_A0_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=7201599996;a-=7201599996;
a+=4800883004;a-=4800883004;
a+=6307400627;a-=6307400627;
a+=1323490754;a-=1323490754;
a+=3663799982;a-=3663799982;
a+=5762174630;a-=5762174630;
a+=6419783311;a-=6419783311;
a+=7100861791;a-=7100861791;
a+=8837637537;a-=8837637537;
a+=2184085369;a-=2184085369;
a+=7266654052;a-=7266654052;
;
  return a+100;
}
