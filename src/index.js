// import { Cipher } from "crypto";

// document.addEventListener("DOMContentLoaded", function(event) { 
    
//   });
  
function encondeMessage(){

    let string = document.getElementById("decodedMessageInputId").value;
    let offset = document.getElementById("offsetEncodeInputId").value;

    let encodedMessage = window.cipher.encode(offset, string);

    document.getElementById("ecodedMessageId").innerText = encodedMessage;
}

function decodeMessage(){

  let string = document.getElementById("encondedMessageInputId").value;
  let offset = document.getElementById("offsetDecodeInputId").value;

  let encodedMessage = window.cipher.decode(offset, string);

  document.getElementById("decodedMessageId").innerText = encodedMessage;
}