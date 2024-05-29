function AddPy() {
  let str= document.getElementById("inputField").value;
  //var result = " "
  if (str.startsWith("Py")) {
    document.getElementById("para").innerHTML = str // same string
    //result=str;
  } else {
    document.getElementById("para").innerHTML = "Py" + str // add Py to the beginning
    //result = "Py" + str;
  }
  //document.getElementById("para").innerHTML=result;
  return(
    <>
   
    </>
  );
  
  }