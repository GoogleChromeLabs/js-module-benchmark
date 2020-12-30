import {f_A_B0} from './A/A_B0.mjs'
import {f_A_C1} from './A/A_C1.mjs'
import {f_A_D2} from './A/A_D2.mjs'
import {f_A_A3} from './A/A_A3.mjs'
export function f_A() {
  let a=1;
  return f_A_B0()+f_A_C1()+f_A_D2()+f_A_A3()+a;
}
