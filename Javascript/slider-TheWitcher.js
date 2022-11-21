const imgArray = [
    '../Imagenes/tw1.jpg',
    '../Imagenes/tw2.jpg',
    '../Imagenes/tw3.jpg',
    '../Imagenes/tw4.jpg',
    '../Imagenes/tw5.jpg',
]
const img = document.querySelector('#slide')
//const img = document.getElementById('slide')
let i = 0
const slideShow = () => {
    img.src = imgArray[i]
    i = ( i < imgArray.length - 1) ? i+1 : 0
}
const interval = () => {
    setInterval(slideShow, 1800)
}