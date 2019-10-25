// import { Cipher } from "crypto";

document.addEventListener("DOMContentLoaded", function(event) { 
    
  });
  
function encondeMessage(){
    console.log("encoding message!.....");

    let string = document.getElementById("decodedMessageInputId").value;
    let offset = document.getElementById("offsetEncodeInputId").value;

    let encodedMessage = window.cipher.encode(offset, string);

    document.getElementById("ecodedMessageId").innerText = encodedMessage;
}