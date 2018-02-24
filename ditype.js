////////////////////////////////////
/////////CLASSES FOR TYPES//////////
////////////////////////////////////

/////////CLASS TYPE INT/////////////
function int(value){
    let val=value || 0;

    let comp=function(value){
        if(typeof(value || val)=='number'){
            return true;
        }
        else{
            return false;
        }
    }

    this.int=function(value){
        if(comp(value || val)){
            val=value || val;
            return val;
        }
        else{
            console.log("You can't use a " + typeof(value) + " to Int value!");
        }
    }
    
}
//////////////////////////

///////CLASS TYPE CHAR////////
function char(value){
    let val=value || 0;

    let comp=function(value){
        if(typeof(value || val)=='char'){
            return true;
        }
        else{
            return false;
        }
    }

    this.char=function(value){
        if(comp(value || val)){
            val=value || val;
            return val;
        }
        else{
            console.log("You can't use a " + typeof(value) + " to Int value!");
        }
    }
}
//////////////////////////////


console.log(typeof('c'));
algo=new int(5);
console.log(algo.int());
console.log(algo.int("hola"));