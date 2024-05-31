const result=document.querySelector('.result');

function appendToDisplay(input){
    result.innerHTML +=input;
}

function Clear(){

}
 
function ClearScreen(){
    result.innerHTML="";
}

function Calculate(){
    try{
        result.innerHTML=eval(result.innerHTML)
    } catch(error){
        result.innerHTML="Error";
    }
}