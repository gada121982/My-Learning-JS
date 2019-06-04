/**
 * ? concat
 * ? push 
 * ? pop 
 * ? shift
 * ? unshift
 * ? slice
 * ? splice
 * 
 */

 //! concat
    var a = [1,2,5]  ; 
    var b  = [10,20]  ; 
    d = a.concat(b) ; 
    for ( var c of d )
    {  
        // console.log(c) ; 
        
    }
   
    
//!push đưa giá trị vào cuối mảng và return về chiều dài của mảng mới 
    // var h = 3; 
    // console.log (a.push(h)) ; 

    // for ( var c of a )
    // {  
    //     console.log(c) ; 
        
    // }
 //!pop lấy phần tử ở cuối mảng ra khỏi mảng và trả về giá trị của phần tử bị lấy ra . 
    // var k = a.pop() ; 
    // console.log(k) ; 
    // console.log(a) ; 
//!shift lấy phần tử ở đầu mảng ra , và trả về giá trị ptu đó 

    // var d = a.shift(); 
    // console.log(d); 
    // console.log(a) ; 

 //!unshift đưa phần tử ở đầu mảng vào , và trả về độ dài  ptu đó 
    var d = a.unshift(3); 
    console.log(d); 
    console.log(a) ; 

    // bài 16