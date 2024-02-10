const formulario = document.getElementById('formulario')
let linhas = ''

formulario.addEventListener('submit', function(e){
e.preventDefault()


captura();

})

function captura(){
    const nome = document.getElementById('nome')
    const telefone = document.getElementById('telefone')
 //   alert(`Nome: ${nome.value} Telefone: ${telefone.value}`)

let linha = `<tr>`
linha += `<td> ${nome.value} </td>`
linha += `<td> ${telefone.value} </td>`
linha += `</tr>`

linhas += linha
const corpoTabela = document.querySelector('tbody')
corpoTabela.innerHTML = linhas

limparCampos()

}

function limparCampos(){
    nome.value = ''
    telefone.value = ''
}