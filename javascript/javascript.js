
let btn = document.getElementById("btn");
function showAlert (event){
    console.log (event);
}
btn.addEventListener("click", showAlert);









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
       
     
// }
// console.log(result(45, 55, 62, 76));
// let ul = document.createElement("ul")
// let li = document.createElement("li")
// let li2 = document.createElement("li")
// li.textContent = "Home"
// li2.textContent = "About"
// ul.appendChild(li);
// ul.appendChild(li2);
// document.body.appendChild(ul);