let select = document.getElementsByTagName("select")[0]
let estadosDoBrasil = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]
for(i = 0; i < estadosDoBrasil.length; i+=1){
    let resultado = estadosDoBrasil[i]
    let estados = document.createElement("option");
    estados.innerText = resultado

    select.appendChild(estados);
}

 let botao = document.getElementById("limpar")
 botao.addEventListener("click", limpaFormulario)
 function limpaFormulario () {
     let inputs = document.getElementsByTagName("input")
     let resumo = document.getElementById("resumo")
     for(i = 0; i < inputs.length; i +=1) {
         inputs[i].value = ""
         resumo.value = ""
     }
 }
