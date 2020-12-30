export async function f_A_A0_A0_A0_A0_A4() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A4/A_A0_A0_A0_A0_A4_A0.mjs').then(m => m.f_A_A0_A0_A0_A0_A4_A0()),
    import('./A4/A_A0_A0_A0_A0_A4_B1.mjs').then(m => m.f_A_A0_A0_A0_A0_A4_B1()),
    import('./A4/A_A0_A0_A0_A0_A4_C2.mjs').then(m => m.f_A_A0_A0_A0_A0_A4_C2()),
    import('./A4/A_A0_A0_A0_A0_A4_D3.mjs').then(m => m.f_A_A0_A0_A0_A0_A4_D3()),
    import('./A4/A_A0_A0_A0_A0_A4_A4.mjs').then(m => m.f_A_A0_A0_A0_A0_A4_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=4874665601;a-=4874665601;
a+=8788679710;a-=8788679710;
a+=2834429540;a-=2834429540;
a+=6740094235;a-=6740094235;
a+=1602926242;a-=1602926242;
a+=9381650087;a-=9381650087;
a+=6211226933;a-=6211226933;
;
  return a+100;
}
