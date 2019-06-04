
var employess = [

    {Name : 'Hai' , age:20} , 
    {Name :'Hiroshi' , age:26} , 
    {Name:'Makita',age:21}  
    
]


for (i = 0 ; i < employess.length ; i++){

    // console.log(employess[i].Name , employess[i].age) ; 

}


// ? for...of 

// for (var employess of employess){

//     console.log(employess.Name, employess.age) ; 

// }

// ? for .. in 
var myDog = {
    Name : 'Lu' ,
    weight: 5.2  , 
    isAlive : false , 
}
// myDog.Name ~~ myDog['Name'] = 'Đần' 

for( var dog in myDog ){
    console.log(myDog[dog]); 

}