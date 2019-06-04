// ! Dùng function như tham số truyền vào . 



var coffeMachine= {

    makeCoffe: function(onFinish){
        console.log("make coffe") ; 
        onFinish(); 

    }
}; 


var abc = function(){
    console.log("done") ; 
}
console.log(coffeMachine.makeCoffe(abc)); 