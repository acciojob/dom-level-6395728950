//your JS code here. If required.

const val  = document.getElementById("level");
document.getElementById("x").map((item,i)=>(
	if(item.textContent===val.textContent){
	alert("The level of the element is:",i);
	break;
	}
));