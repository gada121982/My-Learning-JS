// tìm phần tử đầu tiên thõa mãn và trả về phần tử đó rồi stop 

// var numbers = [1, 2, 3, 4] ; 

// var testnumber = numbers.find(function(number){

//         return number % 2 ===0 ; 

// }) ;
// console.log(testnumber) ; 



var recangles = [
    {with:10 , height:5} , 
    {with:10 , height:20} , 
    {with:4 , height:16} , 
    {hai:4 , loc:20}, 
]
var testrec = recangles.find((a)=>{

    return a.with === 10; 

})
console.log(testrec) ; 