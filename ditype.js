////////////////////////////////////
/////////CLASSES FOR TYPES//////////
////////////////////////////////////


/////////CLASS TYPE FLOAT///////////
function float(error){
    let val;

    if(error!=undefined){
        console.log("Don't put the value on the instance!");//provisional
    }

    this.float=value=>{
        if(comp(value || val)){
            val=value || val;
            return val;
        }
        else{
            console.log("You can't use a " + typeof(value) + " to Float value!")
        }
    }

    let comp=value=>typeof(value)=='number';

}
////////////////////////////////////

/////////CLASS TYPE INT/////////////
function int(error){
    let val;

    //int(error);
        
    if(error!=undefined){
        console.log("Don't put the value on the instance!");//provisional
    }
    

    let comp=value=>{
        let expresionFloat=/[.]/;
        let comprobar=value.toString();
        let punto=expresionFloat.test(comprobar);

        return typeof(value)=='number' && !punto;
    }

    this.int=value=>{
        if(comp(value || val)){
            val=value || val;
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
//////////////////////////////

///////CLASS TYPE CHAR////////
function char(error){
    let val;

    if(error!=undefined){
        console.log("Don't put the value on the instance!");//provisional
    }

    let comp=value=>{
        if(typeof(value)=='string'){
            if(value.length<=1){
                return true;
            }
        }
        else{
            return false;
        }
    }

    this.char=value=>{
        let type=typeof(value);
        if(comp(value || val)){
            val=value || val;
            return val;
        }
        else{
            console.log("You can't use a " + type + " to Char value!");
        }
    }
}
//////////////////////////////////

/////////CLASS TYPE STRING////////////
function string(error){
    let val;

    if(error!=undefined){
        console.log("Don't put the value on the instance!");//provisional
    }

    this.string=value=>{
        if(typeof(value)=='string'){
            val = value || val;
            return val;
        }
        else{
            console.log("You can't use a " + type + " to String value!");
        }
    }
}
//////////////////////////////////////

/////////////CLASS TYPE BOOLEAN///////////
function bool(error){
    let val;

    if(error!=undefined){
        console.log("Don't put the value on the instance!");//provisional
    }
    
    let comp=value=>typeof(value)=='boolean';

    this.bool=value=>{
        if(comp(value || val)){
            val=value || val;
            return val;
        }
        else{
            console.log("You can't use a " + typeof(value) + " to Boolean value!");
        }
    }
}
//////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

/*let hola=new int();

hola.int(function(){//Don't support functions
    return 3;
})*/

hola=new bool();
hola.bool(2);

console.log(hola.bool());