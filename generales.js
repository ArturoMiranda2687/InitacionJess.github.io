const casa = document.querySelector('.regreso')

const cajacasa = document.createElement("a")
    cajacasa.href = "../home.html"
const patras = document.createElement("p")
const tatras = document.createTextNode("Al Inicio")
casa.appendChild(cajacasa)
cajacasa.appendChild(patras)
patras.appendChild(tatras)

const footer = document.querySelector('footer')

const pfoot = document.createElement("p")
const tfoot = document.createTextNode("By Josecito y Arturo")

footer.appendChild(pfoot)
pfoot.appendChild(tfoot)