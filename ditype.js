////////////////////////////////////
/////////CLASSES FOR TYPES//////////
////////////////////////////////////

/////////CLASS TYPE INT/////////////
function int(error){
    let val;

    //int(error);
        
    if(error!=undefined){
        console.log("Don't put the value on the instance!");//provisional
    }
    

    let comp=function(value){
        let expresionFloat=/[.]/;
        let comprobar=value.toString();
        let punto=expresionFloat.test(comprobar);

        return typeof(value)=='number' && !punto;
    }

    this.int=function(value){
        if(comp(value)){
            val=value;
            return val;
        }
        else{
            if(typeof(value)=='number'){
                console.log("You can't use a Float to Int value!");
            }
            else{
                console.log("You can't use a " + typeof(value) + " to Int value!");
            }
            
        }
    }
    
}
//////////////////////////

///////CLASS TYPE CHAR////////
function char(error){
    let val;

    if(error!=undefined){
        console.log("Don't put the value on the instance!");//provisional
    }

    let comp=function(value){
        if(typeof(value)=='string'){
            if(value.length<=1){
                return true;
            }
        }
        else{
            return false;
        }
    }

    this.char=function(value){
        if(comp(value)){
            val=value;
            return val;
        }
        else{
            console.log("You can't use a " + typeof(value) + " to Char value!");
        }
    }
}
//////////////////////////////

var hola=new int();

console.log(hola.int(3.0));