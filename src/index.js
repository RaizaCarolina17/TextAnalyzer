import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const button= document.getElementById("reset-button");
const wordCount = document.querySelector('li[data-testid="word-count"]');
const charCount= document.querySelector("li[data-testid='character-count']");
const noSpace= document.querySelector("li[data-testid='character-no-spaces-count']");
const numCount= document.querySelector("li[data-testid='number-count']");
const sumCount= document.querySelector("li[data-testid='number-sum']");
const wordLength= document.querySelector("li[data-testid='word-length-average']");
const cajaTexto= document.querySelector("textarea");



cajaTexto.addEventListener('input', function(){
  const cajadeTexto = cajaTexto.value
  wordCount.innerHTML="Palabras:"+analyzer.getWordCount(cajadeTexto);
  charCount.innerHTML="Caracteres:"+analyzer.getCharacterCount(cajadeTexto);
  noSpace.innerHTML="Caracteres sin espacio:"+analyzer.getCharacterCountExcludingSpaces(cajadeTexto);
  numCount.innerHTML="Números:"+analyzer.getNumberCount(cajadeTexto);
  sumCount.innerHTML="Suma de números:"+analyzer.getNumberSum(cajadeTexto);
  wordLength.innerHTML="Longitud de palabras:"+analyzer.getAverageWordLength(cajadeTexto);
});

button.addEventListener("click",function(){
  cajaTexto.value="";
  wordCount.innerHTML="Palabras: 0";
  charCount.innerHTML="Caracteres: 0";
  noSpace.innerHTML="Caracteres sin espacio: 0";
  numCount.innerHTML="Números: 0";
  sumCount.innerHTML="Suma de números: 0";
  wordLength.innerHTML="Longitud de palabras: 0.00";
});
