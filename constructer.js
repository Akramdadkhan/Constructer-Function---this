//Factory Method 
// function getFullName(firstName,lastName){
//     return{
//         firstName:firstName,
//         lastName,
//         getName(){
//             return ` First Name: ${this.firstName},Last Name:${this.lastName}`
//         }
//     }
// }

// const ouput = getFullName("JOhn","Wick")
// console.log(ouput.getName())

//factory

function GetFullName(fname,lname){
this.firstName=fname,
this.lastName=lname
this.getname=function(){
    return `First Name: ${this.firstName} Last Name: ${this.lastName}`

}
return this;

}
const output = new GetFullName("Akram","Khan")
console.log(output.getname())