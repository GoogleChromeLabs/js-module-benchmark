export async function f_A_A4_A0() {
  let a=1;
  if (document.evaluate_all) {
    a=helper()
  }
  const results = await Promise.all([
    import('./A0/A_A4_A0_A0.mjs').then(m => m.f_A_A4_A0_A0()),
    import('./A0/A_A4_A0_B1.mjs').then(m => m.f_A_A4_A0_B1()),
    import('./A0/A_A4_A0_C2.mjs').then(m => m.f_A_A4_A0_C2()),
    import('./A0/A_A4_A0_D3.mjs').then(m => m.f_A_A4_A0_D3()),
    import('./A0/A_A4_A0_A4.mjs').then(m => m.f_A_A4_A0_A4())
  ]);
  for (let result of results) a += result;
  return a;
}
function helper() {
  let a=1;a+=1742203614;a-=1742203614;
a+=3758388033;a-=3758388033;
a+=6311411514;a-=6311411514;
a+=9489107767;a-=9489107767;
a+=7261176020;a-=7261176020;
a+=9547738016;a-=9547738016;
a+=4578494025;a-=4578494025;
a+=8100653664;a-=8100653664;
a+=9343055864;a-=9343055864;
a+=6772666355;a-=6772666355;
a+=2226049627;a-=2226049627;
a+=3125022112;a-=3125022112;
a+=4189428822;a-=4189428822;
a+=6994698722;a-=6994698722;
;
  return a+100;
}
