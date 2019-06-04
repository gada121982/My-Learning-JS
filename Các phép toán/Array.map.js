//! important . ánh xạ \. 

var number = [1,2,3,4] ; 

// var caculator = function(x){
//     return x*x; 
// }

// var squaredNumbers = number.map(caculator); 

// console.log(squaredNumbers) ; 

var recangles = [
    {with:10 , height:5} , 
    {with:10 , height:20} , 
    {with:4 , height:16} , 
    {hai:4 , loc:20}, 
]

// dùng map method để biến đổi rectangles thành 1 array
// mới gồm có diện tích của các hình trên
var TinhDienTich = function (recangles){

    
    return recangles.hai*recangles.loc ; // nó chỉ tính toán trên những giá trị được return

}
var DienTich = recangles.map(TinhDienTich); 
console.log(DienTich); 