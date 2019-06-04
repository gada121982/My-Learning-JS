
var name = 'GÂU' ; 
var myDog = {

    weight : 5  , 
    name : 'Đần', 
    age : 1  , 
    bark  : function(){ // anonymous function
        console.log('Meo Meo , my name is ', this.name) ; 

    } ,
    eat : function (food){

        console.log("con",this.name," ăn" , food.nameFood ); 
        this.weight += food.weight ; 

    }

}

var food ={
    nameFood : 'Hot dog'   ,  
    weight  :3 ,  

}

