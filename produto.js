window.onload = function () {
    console.error("Erro")
    console.log("OLÁ MUNDO!")
    console.warn("AVISO")

    let meuForm = $("#formProduto") //O id está sendo instanciado e está chamando o form

    console.log(meuForm) //Exibi a variável #meuForm

    meuForm.on("submit", function (event) {
        event.preventDefault() // Para o funcionamento padrão de um código
        console.log("clicou") // Será feita uma mensagem toda vez que for clicado
        prepararBotao()
        fetch("http://localhost:8080/storm-api/src/test.php").then(function(resposta){ // fetch está fazendo uma requisição que será mandada para o link
            alert(resposta)
        }) // Onde será mandada essa função
    }) // Ocorrendo submit no formulário, será feita uma função 

    function prepararBotao() {
        let botao = $("button#btnSalvar") // Seleciona uma TAG, mas quando é pego ele retorna 
        let ladda = Ladda.create(botao[0])
        ladda.start()
    }

    function clicou() {
        prepararBotao()
    }
}