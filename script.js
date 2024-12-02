const dezR = document.getElementById('10r')
const cincoR = document.getElementById('5r')
const tresR = document.getElementById('3r')
const rSemLimites = document.getElementById('semL')
const questaoProf = document.getElementById('professor')

function DezRodadas () {
    location.href = "Asrodadas10.html"
}

function CincoRodadas() {
    location.href = "Asrodadas5.html"

} 

function TresRodadas() {
    location.href = "Asrodadas3.html"
    sessionStorage.removeItem('contagem')
}

function SemLimites() {
    location.href = "AsrodadasSemLimites.html" 
}   
 
    

