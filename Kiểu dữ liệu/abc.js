    // ! I.các kiểu dữ liệu đơn giản 

    // var a1 = 100 ; 
    // var a2 = 0.5;  
    // var str ="hello world!" ; 
    // var str1 ="hello wolrd"
    // console.log(str) ; 

    // ! II.Kiểu dữ liệu object
    // example
    var myDog = {
        Name : 'Lu' ,
        weight: 5.2  , 
        isAlive : false , 

        bar: function(){ // annonymous function

            console.log('meo meo')   ; 


        }
    }
        
    var mybestfriend = {
        nickName : 'None' , 
        age : 12 , 
        gender : 'female', 
        
    }
    //! II.1. Thay đổi giá trị của object
    myDog['Name'] = "Cún"  ; 
    console.log(myDog['Name']) ; 
    

    //! II. Mảng 
    var Array = [myDog,mybestfriend] ; 
    for(a  = 0 ; a < Array.length ; a++){
        console.log(Array[a])  ; 
    }

    Array[0] = mybestfriend ; 
    console.log(Array[0]) ; 
     
