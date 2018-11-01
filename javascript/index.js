
let x= document.getElementsByClassName("utbild-struct");

console.log(x.length);



for(var i=0; i< x.length; i++) {
//border="9px solid";
// todo: lägg till en event listener på varje utbild-struct(dvs x[i].addEVENT...)
console.log(x[i].classList.toggle('test-klass'));
x[i].addEventListener('click', function (event) {
let y= document.getElementById('prickar');
y.innerHTML+= ".";

if(y.innerHTML.length > 5){
    y.innerHTML= ".";
    

}
	// If the clicked element doesn't have the right selector, bail
	//if (!event.target.matches('.click-me')) return;

	// Don't follow the link
	//event.preventDefault();

	// Log the clicked element in the console
	console.log(event.target);

});
}

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



