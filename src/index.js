import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

document.getElementById("reset-button").addEventListener("click", function () {
    const textArea = document.querySelector('[name="user-input"]');
    textArea.value = '';
});