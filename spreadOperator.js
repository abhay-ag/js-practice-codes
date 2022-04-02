/* Spread Operator */
// Syntax : ...
// Usage: For Extracting all elements from an array or an object 
arr = [1,2,3,4,5,6] 
obj ={
    name:"New Object",
    type:"Object"
}
console.log(...arr);
// extracting properties from obj and assigning to obj2 with changes
obj2 = {...obj,type:"Subject"}
console.log(obj2);