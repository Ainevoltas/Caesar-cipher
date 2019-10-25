window.cipher = {
  // Acá escribe tu código.
  encode(offset, string){

    let encondedMessage = "";
    let newPosition = 0;
    let currentCharPosition = 0;

    for(i = 0 ; i < string.length; i++){
      currentCharPosition = string.charCodeAt(i);
      if(currentCharPosition != "32"){
        newPosition = (currentCharPosition - 65 + offset) % 26 + 65;
      }
      encondedMessage = encondedMessage + String.fromCharCode(newPosition);         
    }

    return encondedMessage;
  }
};


