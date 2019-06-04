    // var number = [1,2,3,4]  ; 

    // var k= number.reduce(function(a,b){

    //     return a + b; 
    // },3); // ! số 3 là giá trị ban đầu của tổng
    // console.log(k);  


    // //! bài tập 

    var orders = [
        {name :'A' , quatity : 2 , unitPrice : 100}  , 
        {name :'B' , quatity : 1 , unitPrice : 100}  , 
        {name :'C' , quatity : 2 , unitPrice : 100}  , 

    ]
    // the way 1 

    var sum = orders.reduce(function(a,b){return a + b.quatity*b.unitPrice},0
    )
    // the way 2 
    var sum2 = orders.reduce((a,b)=>
        (a + b.quatity*b.unitPrice ) , 
    
    0) ; 


    // ?giá trị khởi tạo sẽ được gán cho a , vd ở trên giá trị khởi tạo là 0 , sau đó a sẽ tính toán 
    // ?và cộng dồn vào a , sau đó lại xử lí tiếp tục . 
    // console.log(sum) ; 
    // console.log(sum2) ; 
    //! bài tập về nhà 

    var items  = ['Tom','Bill','Kim'] ; 

    // result just like this <Tom><Bill><Kim>
    var result = items.reduce((key,key1)=>(key+"<"+key1+">"),'') ; 
    console.log(result) ;  
    
    /*
    key = <
    <tombillkim
     */