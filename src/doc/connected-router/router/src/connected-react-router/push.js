import {CALL_HISTORY_METHODS} from "./constants";
export default function (path) {
   return {
       type: CALL_HISTORY_METHODS,
       payload: {
           methods: 'push',
           path
       }
   }
}