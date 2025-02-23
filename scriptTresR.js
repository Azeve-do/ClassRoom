var listaProfessores = [
    {nome: 'Luciana Cassia', turma: '1º Ano A', turma2: '2º Ano F'},
    {nome: 'Jussara', turma: '1º Ano B'},
    {nome: 'Aldenice', turma: '1º Ano C', turma2: '2º Ano E'},
    {nome: 'Marli', turma: '1º Ano D'},
    {nome: 'Ana Marta', turma: '5º Ano C'},
    {nome: 'Ivana', turma: '1º Ano E'},
    {nome: 'Francisca Andreia', turma: '2º Ano D'},
    {nome: 'Edjane', turma: '2º Ano B'},
    {nome: 'Lenice', turma: '3º Ano B'},
    {nome: 'Ana Cristina', turma: '3º Ano C'},
    {nome: 'Silvia Araujo', turma: '5º Ano E'},
    {nome: 'Graça', turma: '5º Ano B', turma2: '3º Ano D'},
    {nome: 'Rosimere', turma: '2º Ano A'},
    {nome: 'Yara', turma: '1º Ano G'},
    {nome: 'Eliane', turma: '4º Ano E'},
    {nome: 'Silvia Maria', turma: '3º Ano E'},
    {nome: 'Valeria', turma: '1º Ano F'},
    {nome: 'Adriana Dias', turma: '5º Ano A', turma2: '3º Ano F'},
    {nome: 'Adriana Pandolfi', turma: '4º Ano A', turma2: '4º Ano F'},
    {nome: 'Ingrid', turma: '4º Ano B'},
    {nome: 'Vilma', turma: '5º Ano D'},
    {nome: 'Luciane', turma: '4º Ano D'},
    {nome: 'Andrea', turma: '3º Ano A'},
    {nome: 'Jorge', turma: '4º Ano C'},
    {nome: 'Lidia', turma: '2º Ano C'},
    
]

const listaSalas = [
    "1º Ano A",
    "1º Ano B",
    "1º Ano C",
    "1º Ano D",
    "1º Ano E",
    "1º Ano F",
    "1º Ano G",
    "2º Ano A",
    "2º Ano B",
    "2º Ano C",
    "2º Ano D",
    "2º Ano E",
    "2º Ano F",
    "2º Ano G",
    "3º Ano A",
    "3º Ano B",
    "3º Ano C",
    "3º Ano D",
    "3º Ano E",
    "3º Ano F",
    "4º Ano A",
    "4º Ano B",
    "4º Ano C",
    "4º Ano D",
    "4º Ano E",
    "5º Ano A",
    "5º Ano B",
    "5º Ano C",
    "5º Ano D",
    "5º Ano E",
]


// ------ VARIÁVEIS PARA CORREÇÃO DE PROFESSORAS COM DUAS TURMAS
var duasTurmas = ['turma', 'turma2']
var n_aleatorio = Math.floor(Math.random() * duasTurmas.length);
var retorno_aleatorio = duasTurmas[n_aleatorio]


// ------ VARIÁVEIS PARA EXIBIÇÃO DO FRONT-END
const idRodadas = document.getElementById('identificacao-rodadas');
const alternativa = document.getElementById('alternativa1')
const alternativaDois = document.getElementById('alternativa2')
const alternativaTres = document.getElementById('alternativa3')
const alternativaQuatro = document.getElementById('alternativa4')


// ------ VARIÁVEIS PARA O SUBMIT DO FORM
const formulario = document.getElementById('form')
const valorInput = document.getElementById("iprimeira")
const valorInputDois = document.getElementById("isegunda")
const valorInputTres = document.getElementById("iterceira")
const valorInputQuatro = document.getElementById("iquarta")


// ------ VARIÁVEIS PARA O MODAL ----------
const modal = document.querySelector('#modal')
const modal2 = document.querySelector('#modal2')
const botaoProxRodada = document.getElementById('btn-prox-rodada')
const botaoSair = document.getElementById('btn-Sair')
var textoAcertoOuErro = document.querySelector('#texto-resposta')
var respostaCerta = document.querySelector('#texto-resposta-certa')
const contagemAcertos = document.getElementById('contagem-de-acertos')
const voltarInicio = document.getElementById('voltarInicio')



// ------ VARIÁVEIS PARA O BACK-END
const professorAleatorioIndex = Math.floor(Math.random() * listaProfessores.length);
const professorAleatorio = listaProfessores[professorAleatorioIndex].nome
const listaEscolhasAleatorias = []
var quantidadeAcerto = 0
var intContagemAcertos = sessionStorage.getItem('contagem')

var rodadasLimites = 3

questaoProf.innerText = professorAleatorio

while (listaEscolhasAleatorias.length < 3){

    var opçoesIndex = Math.floor(Math.random () * listaSalas.length)
    var opçoesAleatorio = listaSalas[opçoesIndex]

    listaEscolhasAleatorias.push(opçoesAleatorio)
}


listaProfessores.forEach((professor) => {
    var numeroAleatorioEntreQuatro = Math.floor(Math.random() * (1, 4))

    if(professor.nome == professorAleatorio) {
        if(professor.turma == listaEscolhasAleatorias[0] || professor.turma == listaEscolhasAleatorias[1] || professor.turma == listaEscolhasAleatorias[2]) {
            location.reload()

        // Condição para escolher aleatoriamente a resposta certa entra a turma 1 e 2 (dos professores que possuem duas turmas).
        } else if(Object.keys(professor).length == 3){

            listaEscolhasAleatorias.forEach((alternativas) => {
                if(professor.turma == alternativas && professor.turma2 == alternativas) {
                    location.reload()
                }
            })

            if(retorno_aleatorio == 'turma') {
                listaEscolhasAleatorias.splice(numeroAleatorioEntreQuatro, 0, professor.turma)    
            } else if (retorno_aleatorio == 'turma2'){
                listaEscolhasAleatorias.splice(numeroAleatorioEntreQuatro, 0, professor.turma2)  
            }

        } else {
            listaEscolhasAleatorias.splice(numeroAleatorioEntreQuatro, 0, professor.turma)
        }

    }
})
const alternativasUnicas = Array.from(new Set(listaEscolhasAleatorias))

while(alternativasUnicas.length < 4) {

    var opçoesIndex = Math.floor(Math.random () * listaSalas.length)
    var opçoesAleatorio = listaSalas[opçoesIndex]

    if(opçoesAleatorio == alternativasUnicas[0] || opçoesAleatorio == alternativasUnicas[1] || opçoesAleatorio == alternativasUnicas[2]) {
        location.reload()
    } else {
        alternativasUnicas.push(opçoesAleatorio)
    }
    
} 

alternativa.innerText = alternativasUnicas[0]
alternativaDois.innerText = alternativasUnicas[1]
alternativaTres.innerText = alternativasUnicas[2]
alternativaQuatro.innerText = alternativasUnicas[3]

valorInput.value = alternativasUnicas[0]
valorInputDois.value = alternativasUnicas[1]
valorInputTres.value = alternativasUnicas[2]
valorInputQuatro.value = alternativasUnicas[3]

quantidadeAcerto = Number(intContagemAcertos)

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    var selected = document.querySelector("input[name='resposta']:checked").value;

    listaProfessores.forEach((professor) => {
        if(professor.nome == professorAleatorio) {
            if(professor.turma == selected || professor.turma2 == selected) {
                quantidadeAcerto += 1
                sessionStorage.setItem('contagem', quantidadeAcerto)

                textoAcertoOuErro.style.backgroundColor = '#62D467'
                textoAcertoOuErro.innerHTML = 'ACERTOU!'
                modal.showModal()
            } else { 
                textoAcertoOuErro.style.backgroundColor = '#D46262'
                textoAcertoOuErro.innerHTML = 'ERROU!'
                respostaCerta.innerText = `R: ${professor.turma}, ${professor.turma2}`
                modal.showModal()
            }
        }
    })
    
    somarRodadas() 
})

var NumeroRodadas = sessionStorage.getItem('Rodadas')

idRodadas.innerText = NumeroRodadas || '1'

function somarRodadas () {
    idRodadas.innerHTML = parseInt(idRodadas.innerText) + 1;
    sessionStorage.setItem('Rodadas', idRodadas.innerText)
}

if(NumeroRodadas > rodadasLimites) {
    contagemAcertos.innerText = `0${quantidadeAcerto}/0${Number(rodadasLimites)}`

    sessionStorage.removeItem('Rodadas')
    sessionStorage.removeItem('contagem')

    modal2.showModal()
}

botaoProxRodada.addEventListener('click', () => {
    location.href = 'Asrodadas3.html'
})

botaoSair.addEventListener('click', () => {
    contagemAcertos.innerText = `0${quantidadeAcerto}/0${Number(rodadasLimites)}`

    sessionStorage.removeItem('Rodadas')
    sessionStorage.removeItem('contagem')
    modal2.showModal()
}) 

voltarInicio.addEventListener('click', () => {
    sessionStorage.removeItem('contagem')
    sessionStorage.removeItem('Rodadas')

    location.href = "páginaInicial.html"
})
