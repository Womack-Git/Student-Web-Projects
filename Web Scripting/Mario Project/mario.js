//Mario Project 3 --  Andrew Womack

//Reset pyramid function
let clearContent = function(){
  document.getElementById("pyramid").innerHTML = "";
}

//Old project 2 function, moved a for loop to determineHeight function
function printPyramid(rows, height){
  let str = '';
  for(let spaces = height - rows; spaces>=1; spaces--){
    str += "."
  }
  for (let num = rows;num>=0;num--){
    str += "#"
  }  

  let para = document.createElement("p");
  let node = document.createTextNode(str);
  para.appendChild(node);
  let element = document.getElementById("pyramid");
  element.appendChild(para);

  return str
}

//Project 3 new stuff
function logClickAndHandler(){
  clearContent("pyramid");  //content reset function call
  let height = document.getElementById("height").value;
  determineHeightAndThenDrawPyramid(height);
}

//Aforementioned for loop that I moved to a function
function determineHeightAndThenDrawPyramid(height){
  for(let i = 1; i <= height;i++){
  console.log(printPyramid(i, height))
  } 
}

