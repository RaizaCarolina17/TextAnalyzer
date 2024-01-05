const analyzer = {  
  
  getWordCount: (cajadeTexto) => {
    let palabras = 0;
    const arrayWord = cajadeTexto.split(/\s+/);
    for (let i = 0; i<arrayWord.length; i++){
      if (arrayWord[i].trim() !== ''){
        palabras++
      }
    }
    return palabras;
  },

  getCharacterCount: (cajadeTexto) => {
    const numLetras = cajadeTexto.length;
    return numLetras;
  },
    
  getCharacterCountExcludingSpaces: (cajadeTexto) => {
    const caractEsp = cajadeTexto.replace(/\s+/g, '').replace(/[.,:;_?¡¿!"'()[\]{}«»]/g, '');
    return caractEsp.length;
    
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (cajadeTexto) => {
    const palabras = cajadeTexto.trim().split(/\s+/).filter(word => word !== '');
    let prmPalabras = 0;
    for (let i = 0; i < palabras.length; i++) {
      prmPalabras += palabras[i].length;
    }
    return palabras.length ? (prmPalabras / palabras.length).toFixed(2) : 0;
    
    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (cajadeTexto) => {
    const numeros = cajadeTexto.split(/\s+/).filter(word => /^\d+(\.\d+)?$/.test(word));
    return numeros.length;
   
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (cajadeTexto) => {
    let sumaNumeros = 0;
    for (let i = 0; i < cajadeTexto.length; i++) {
      if (cajadeTexto[i] >= '0' && cajadeTexto[i] <= '9') {
        sumaNumeros += parseInt(cajadeTexto[i], 10);
      }
    }
    return sumaNumeros;
  }
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
}

export default analyzer;
