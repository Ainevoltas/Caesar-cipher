window.cipher = {
  // Acá escribe tu código.
  encode(offset, string) {

    let encondedMessage = "";
    let newPosition = 0;
    let currentCharPosition = 0;

    for(let i = 0 ; i < string.length; i++){
        currentCharPosition = string.charCodeAt(i);   
        newPosition = (parseInt(currentCharPosition) - 65 + parseInt(offset)) % 26 + 65;
        encondedMessage = encondedMessage + String.fromCharCode(newPosition);         
    }

    return encondedMessage;
  },

  decode(offset, string) {

    let decodedMessage = "";
    let newPosition = 0; 
    let currentCharPosition = 0;

    for(let i = 0; i < string.length; i++) {
      currentCharPosition = string.charCodeAt(i);
      newPosition = (parseInt(currentCharPosition) - 65 - parseInt(offset)) % 26 + 65;
      decodedMessage = decodedMessage + String.fromCharCode(newPosition);
    }

    return decodedMessage;
  }
};


