// function GetPersonDetails(fname,lname){
//     this.firstName=fname;
//     this.lastName=lname;
//     this.tags= [5,10,15,20,25]
//     this.getDetails=function(){
//        const result= this.tags.forEach(()=>{
// console.log(this)
//        }     
//        )
//     }
// }

// // //This Key and the output will be global 

// const output = new GetPersonDetails("John","Wick")
// console.log(output.getDetails())

// function unnamed() {
//     console.log(this)
// }
// unnamed();

// function unNamed() {
//     console.log(this)
// }
// unNamed()



 const movies ={
     firstName:"Akram",
     lastName:"Khan",
     tags:[5,10,15,20,25],
     getFullName(){
        //  const abc=this
         this.tags.forEach( function(elem){
                 return console.log (this.firstName + " " + elem + " " + this.lastName);
             }.bind(this)
             )
     }

 }
 const result = movies.getFullName();
 console.log(result);
