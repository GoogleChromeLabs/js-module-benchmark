import {f_A_A0} from './A/A_A0.mjs'
import {f_A_B1} from './A/A_B1.mjs'
import {f_A_C2} from './A/A_C2.mjs'
import {f_A_D3} from './A/A_D3.mjs'
export function f_A() {
  let a=1;
  return f_A_A0()+f_A_B1()+f_A_C2()+f_A_D3()+a;
}
