let inputTexto = document.querySelector(".input-texto")
let traducao = document.querySelector(".traducao")
let idioma = document.querySelector(".idioma")

async function traduzir() {
    if (inputTexto.value.trim() === "") {
        traducao.innerText = "Digite algo para traduzir."
     return
    }
         traducao.innerText = "Traduzindo..."
let endereco = "https://api.mymemory.translated.net/get?q=" 
    + encodeURIComponent(inputTexto.value)
    + "&langpair=pt|" + idioma.value

    try {
        let resposta = await fetch(endereco)
        let dados = await resposta.json()

        traducao.innerText = dados.responseData.translatedText 
    } catch (erro) {
        traducao.innerText = "Erro ao traduzir 😢"
    }
}

function usarMicrofone(){
    const inputTexto =document.querySelector(".input-texto")
    if(!("webkitSpeechRecognition" in window)) {
        alert("Seu navegador não suporta reconhecimento de voz 😢")
        return
    }
    const recognition = new webkitSpeechRecognition()
    recognition.lang = "pt-BR"
    recognition.continuous = false
    recognition.interimResults = false 
    recognition.onresult = function(event) {
        const textoFalado = event.results[0][0].transcript 
        inputTexto.value = textoFalado}

    recognition.onerror = function() {
        alert ("Erro ao usar o microfone 🎤")
        }
    recognition.start()
    

}