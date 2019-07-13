// Modifique a função sum para que ela use o operador rest e funcione com qualquer numero de parametros
const sum = (function() {
 "use strict";
 return function sum(...arr) {
   const args = arr;
   return args.reduce((a, b) => a + b, 0);
 };
})();
console.log(
    sum(1, 2, 3, 4, 10)
    ); // 6