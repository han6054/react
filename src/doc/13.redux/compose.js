function a(str) {
  return '1'+str
}
function b(str) {
    return '2'+str
}
function c(str) {
    return '3'+str
}

function compose(...funcs) {
  if(funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
console.log(compose(a, b, c)('han'));

export default compose

