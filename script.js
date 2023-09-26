let isPressed = false;
function demo_function() {
  isPressed = true;
  if (isPressed == true) {
    var finalData = document.getElementById("inputData").value;
    //alert(finalData);

    document.getElementById("outputData").value = finalData;
    finalData = null;
    document.getElementById("inputData").value = finalData;

    document.getElementById("myButton").style.backgroundColor = "#FF0000";
  }
}
