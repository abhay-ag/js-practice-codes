// objects (staticaly)
let codeEditor = {
    name:"VS Code",
    publisher: "Microsoft",
    crossPlatform: true
}
//
console.log(codeEditor);

// Getting value from object

console.log(codeEditor.name,codeEditor.publisher,codeEditor.crossPlatform);

// assigning new value to an object property
codeEditor.name = "Sublime"
console.log(codeEditor.name);

// Creating an object dynamically

let laptop = new Object();
laptop.name="ASUS";
laptop.MODEL="Tuff Gaming";
laptop.price="70K";

console.log(laptop);

