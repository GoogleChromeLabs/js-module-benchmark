import {f_A_B0} from './A/A_B0.mjs'
import {f_A_A1} from './A/A_A1.mjs'
import {f_A_C2} from './A/A_C2.mjs'
export function f_A() {
  let a=1;
  return f_A_B0()+f_A_A1()+f_A_C2()+a;
}
