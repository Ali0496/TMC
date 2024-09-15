
// function avg (x,y,z){
//     let avg =(x+y+z)/3
//     if (avg >=50 && avg <60) {
//     console.log("psssed")
// }

// if(avg >=50 && avg <60){
//     console.log("failed")
// }
// return avg
//    }

// class Animal {
//     constructor(value){
//         this.name = value;
//     }
//     eat () {
//         return `this ${this.name} is eating`;
//     }
// }
// class Dog extends Animal {
//     bark(){
//         return `this ${this.name} is barking`
//     }
// }
// let myDog = new Dog("Bobby");
// console.log(myDog.bark())
// let tasks = []

let addBtn = document.getElementById("add");
addBtn.addEventListener("click", () => {
    let text = document.getElementById("input").value;
    let randomNum = Math.random(8);
console.log(randomNum);

tasks.push({id: randomNum, name: text });
showElement();
});
let list = document.getElementById("list");

function showElement(){
    list.innerHTML = "";
    tasks.forEach((user) => {
        let li = document.createElement("li");
        li.textContent = user.name;
        list.appendChild(li);
    })
}



console.log(tasks, "todo list array");





// console.log(avg(50,50,50))


// function isEven  (x){
//     let remain = x % 3;
//     if (remain == 0){
//         return "it is Even"
//     }
//     else{
//         return "it is Odd"
//     }
// }
// console.log(isEven(99))
// function result(x, y, z, u){
//     let sum = x + y + z + u;
//     let avg = sum / 4;

//     if(avg > 50){
//         return "Student is passed"
//     }
//     else{
//        "Student is passed" 

//     }
       
     3 + 3 
// }




// let btn = document.getElementById("btn");
// function showAlert (event){
//     console.log (event);
// }
// btn.addEventListener("click", showAlert);









// function showInput(){
//     let input = document.getElementById("username").value;
//     let output = document.getElementById("output");
//     output.textContent = input;
// }

// function showInfo2 (){
//     let name = document.getElementById("name").value;
//     let password = document.getElementById("password").value;
//     let output = document.getElementById("output")
//     output.innerHTML = `<div> 
//     <p> name: ${name}</p>
//     <p> password: ${password}</p>
//     </div>`;
//     return false;

// }








// function show(){
//     alert ("Hello from my function");
// }


// let username = prompt ("Enter your name")
// console.log(username, "this is what you have netered")









// console.log(result(45, 55, 62, 76));
// let ul = document.createElement("ul")
// let li = document.createElement("li")
// let li2 = document.createElement("li")
// li.textContent = "Home"
// li2.textContent = "About"
// ul.appendChild(li);
// ul.appendChild(li2);
// document.body.appendChild(ul);



