let height = prompt("How many blocks tall should the pyramid be?");

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

for(let i = 1; i <= height;i++){
  console.log(printPyramid(i, height))
}


