const contenedorhojas = document.querySelector('.contenedorhojas')

//var hojas =(
//    {nombre: "hoja1", img:"./media/assets/hoja.png"},
//    {nombre: "hoja2", img:"./media/assets/hojacafe.png"},
//    {nombre: "hoja3", img:"./media/assets/olivo.png"}
//)


const hoja1 = document.createElement("img")
    hoja1.src = "./media/assets/hoja.png"
const hoja2 = document.createElement("img")
    hoja2.src = "./media/assets/hojacafe.png"
const hoja3 = document.createElement("img")
    hoja3.src = "./media/assets/olivo.png"

contenedorhojas.appendChild(hoja1)
contenedorhojas.appendChild(hoja2)
contenedorhojas.appendChild(hoja3)