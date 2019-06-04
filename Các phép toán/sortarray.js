var numbers  = [3,3,2,6,7] ; 

var abc = numbers.sort(function(b,a){
    return b-a ; 

}) ; 

// console.log(abc) ; 

//! bài tập về nhà . 
// define an array of products (name,price, stock) ; 
// sort increase price . 
// sort total 
var  products =[
    {name:"Chuối"  , price:100 , stock :2 } , 
    {name:"Đu Đủ"  , price:250 , stock :1 } , 
    {name:"Bơ"     , price:150 , stock :2 } , 
]

var SortProducts = products.sort(function(a,b){

    return a.price*a.stock - b.price*b.stock ; 
}
) ; 
console.log(SortProducts); 