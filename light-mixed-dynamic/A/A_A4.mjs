export async function f_A_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A4_A0.mjs').then(m => m.f_A_A4_A0()),
    import('./A4/A_A4_B1.mjs').then(m => m.f_A_A4_B1()),
    import('./A4/A_A4_C2.mjs').then(m => m.f_A_A4_C2()),
    import('./A4/A_A4_D3.mjs').then(m => m.f_A_A4_D3()),
    import('./A4/A_A4_A4.mjs').then(m => m.f_A_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=9824952898;a-=9824952898;
a+=3154458728;a-=3154458728;
a+=2677047561;a-=2677047561;
a+=7204895798;a-=7204895798;
a+=2477419489;a-=2477419489;
a+=9669473677;a-=9669473677;
a+=2748591472;a-=2748591472;
a+=8656242549;a-=8656242549;
a+=6734766051;a-=6734766051;
a+=6364565213;a-=6364565213;
a+=2663127802;a-=2663127802;
a+=7539028159;a-=7539028159;
a+=7575847368;a-=7575847368;
a+=4899119894;a-=4899119894;
a+=1745608615;a-=1745608615;
a+=9116664834;a-=9116664834;
;
  return a+100;
}
