function clearContent(element) {
   element.value = "";
}
function setCookie(element) {
   var d = new Date();
   var value = "";
   for (var i = 0; i < element.value.length; i++) {
         value += element.value.charCodeAt(i) + "@";
   }
   d.setTime(d.getTime() + (7*86400000)); //7 days 86400000 =24*60*60*1000
   var expires = "expires="+ d.toUTCString();
   document.cookie = "myNotes=" + value + ";" + expires + ";path=/";
   
}
function getCookie(name){
   var re = new RegExp(name + "=([^;]+)");
   var value = re.exec(document.cookie);
   return (value != null) ? unescape(value[1]) : null;
}
function writeTextArea(element){
   var value = getCookie("myNotes");
   var arrayValues = value.split("@");
   var arrayValue = "";
   var outputValue = "";
   var stringTemp = "";
   for (var i = 0; i < arrayValues.length - 1; i++) {
         arrayValue = arrayValues[i];
         outputValue += String.fromCharCode(arrayValues[i]);
   }
   element.value = outputValue;
   element.focus();
}
function selectAll(element){
   element.select();
}
function copyToClipboard(){
   selectAll(myNotes);
   document.execCommand("Copy");
   window.getSelection.empty();
   window.getSelection
   return false;
}

function main(element){
   writeTextArea(element);
   element.addEventListener("mouseleave", function (event) {setCookie(element)}, false);
   element.addEventListener("mouseout", function (event) {setCookie(element)}, false);
}

