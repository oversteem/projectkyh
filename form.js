// Gubben som springer i headern.


var tID; //we will use this variable to clear the setInterval()

function stopAnimate() {
  clearInterval(tID);
} //end of stopAnimate()


function animateScript() {

  var position = 256; //start position for the image slicer
  const interval = 100; //100 ms of interval for the setInterval()
  const diff =64; //diff as a variable for position offset
  
  tID = setInterval(() => {
  
    document.getElementById("image").style.backgroundPosition =
      `-${position}px 0px`;
    //we use the ES6 template literal to insert the variable "position"
    
    if (position < 1536) {
      position = position + diff;
    }
    //we increment the position by 256 each time
    else {
      position = 256;
    }
    //reset the position to 256px, once position exceeds 1536px
    
  }, interval); //end of setInterval
} //end of animateScript()


//Intressen så kickar man på ett så kommer ett meddelande fram
function validate(){
    if(document.getElementById('resa').checked){
       alert("Du är inte redo för att studera. Sök igen nästa år.");
    } else if (document.getElementById('matafåglar').checked){
            alert("Du är tråkigt get a life!");
    } else if(document.getElementById('sport').checked){
        alert("Kul att du gillar sport");
    }else if (document.getElementById('matlagning').checked){
        alert("Du har hamnat fel! sök när du bytt intresse");
    } else if (document.getElementById('gameing').checked){ 
        alert("Grymt intreese! ANSÖK!!");
    }else{
            alert("Du bockade av en ruta");
        }
    }
//Skicka-ansökan-knappen 
    function send(){
        alert("Tack för din ansökan! Vi återkommer ombesked!");
    }

 