//your JS code here. If required.

const element = document.getElementById("level");
let level = 0;
while(element){
  element = element.parentNode;
  level++;
}
alert("The level of the element is: " + level);