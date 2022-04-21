//função para criptografar texto
function criptografar(){
 
    var recebTexto = document.querySelector('#insert-textarea');

    if (recebTexto.value != "") {
        var textCrypt = recebTexto.value.replace(/e/g, "enter");
            textCrypt = textCrypt.replace(/i/g, "imes");
            textCrypt = textCrypt.replace(/a/g, "ai");
            textCrypt = textCrypt.replace(/o/g, "ober");
            textCrypt = textCrypt.replace(/u/g, "ufat");

        document.querySelector('#resultado-textarea').value = textCrypt;
        recebTexto.value = "";
    }

}

// função para descriptografar texto

function descriptografar(){

    var recebTexto = document.querySelector('#insert-textarea'); //recebe o texto digitado na text-area
    
    if (recebTexto.value != "") { //verifica se recebTexto e vazia

        var textCrypt = recebTexto.value.replace(/enter/g, "e"); //cria variavel 
        textCrypt = textCrypt.replace(/imes/g, "i");
        textCrypt = textCrypt.replace(/ai/g, "a");
        textCrypt = textCrypt.replace(/ober/g, "o");
        textCrypt = textCrypt.replace(/ufat/g, "u");

      
        document.querySelector('#resultado-textarea').value = textCrypt;        
        recebTexto.value = "";
    }

}
// adicionando avento de click para o botão de copiar mensagem
function CopiaTexto(){
    document.querySelector("#resultado-textarea").disabled = false;
    document.querySelector("#resultado-textarea").select();
    document.execCommand("cut");
    alert("Texto Copiado!!!");
}


// Fonte de Conulta:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace





























































/**************************Função copiar******************************************************************/

// iniciando lógicas para o projeto

// adicionando avento de click para o botão de criptografar mensagem
/*
document.querySelector('#btn-criptografar').addEventListener('click', () => {

    var textoInserido = document.querySelector('#insert-textarea');

    if (textoInserido.value != "") {
        var textoCriptografado = textoInserido.value.replace(/e/g, "enter");
        textoCriptografado = textoCriptografado.replace(/i/g, "imes");
        textoCriptografado = textoCriptografado.replace(/a/g, "ai");
        textoCriptografado = textoCriptografado.replace(/o/g, "ober");
        textoCriptografado = textoCriptografado.replace(/u/g, "ufat");

        document.querySelector('#img-procurando').style.display = "none";
        document.querySelector('#resposta-textarea').value = textoCriptografado;
        document.querySelector('#btn-copiar').disabled = false;
        textoInserido.value = "";
    }
});

// adicionando avento de click para o botão de descriptografar mensagem
document.querySelector('#btn-descriptografar').addEventListener('click', () => {

    var textoInserido = document.querySelector('#inserir-textarea');

    if (textoInserido.value != "") {
        var textoCriptografado = textoInserido.value.replace(/enter/g, "e");
        textoCriptografado = textoCriptografado.replace(/imes/g, "i");
        textoCriptografado = textoCriptografado.replace(/ai/g, "a");
        textoCriptografado = textoCriptografado.replace(/ober/g, "o");
        textoCriptografado = textoCriptografado.replace(/ufat/g, "u");

       // document.querySelector('#img-procurando').style.display = "none";
        document.querySelector('#resposta-textarea').value = textoCriptografado;
      //  document.querySelector('#btn-copiar').disabled = false;
        textoInserido.value = "";
    }
});

// adicionando avento de click para o botão de copiar mensagem
document.querySelector('#btn-copiar').addEventListener('click', () => {

    document.querySelector("#resposta-textarea").disabled = false;
    document.querySelector("#resposta-textarea").select();
    document.execCommand("cut");
   // document.querySelector('#img-procurando').style.display = "block";
   // document.querySelector('#btn-copiar').disabled = true;
   // document.querySelector("#resposta-textarea").disabled = true;
    alert("O texto foi copiado para a sua área de transferência!");
});
*/





/*function copyText(){
  let textoCopiado = document.getElementById("texto");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0,99999);
  document.execCommand("copy");
  alert("O texto é: " + textoCopiado.value);
}
 

*/

