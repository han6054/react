export default function isPlainObject(obj) {
   if(typeof obj!= 'object'|| obj === null) {
       return false
   }
    return Object.getPrototypeOf(obj) === Object.prototype;
}

// function isPlainObject(obj) {
//     if(typeof obj!= 'object'|| obj === null) {
//         return false
//     }
//     let proto = obj;
//     while (Object.getPrototypeOf(proto)) {
//       proto = Object.getPrototypeOf(proto)
//    }
//    console.log(proto);
//     return Object.getPrototypeOf(obj) === Object.prototype;
// }
//
// let obj = {name: 'aaa'};
// let result = isPlainObject(obj);
// console.log(result);

