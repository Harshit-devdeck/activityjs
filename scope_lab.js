var  globalVar = " Im a global variable";
let globalLet = "Im also global, but scoped with let";
const globalconst = "Im a global constant";

{
    // block scope
    var blockVar = " im a block var";
    let blockLet= " im block let"
const blockconst= " im a block const"
}
//  global scope 
 console.log(globalVar);
 console.log(globalLet);
 console.log(globalconst);
//  block scope
console.log(blockVar);
// console.log(blockLet);
function show(){
    var funcvar=" im block scoped var";
    let funclet= " im block scoped let";
    const funcconst=" im block scoped const";
}
show();
console.log(funcvar); // Throws ReferenceError
console.log(funclet); // Throws ReferenceError
console.log(funcconst); // Throws ReferenceError



