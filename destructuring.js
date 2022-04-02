/*Destructuring*/

let codeEditor = {
    name1:"VS Code",
    publisher: "Microsoft",
    crossPlatform: true
}

let {name1,publisher,crossPlatform} = codeEditor; // destructuring , these name should be same as property name of the object

console.log(name1,publisher,crossPlatform);
