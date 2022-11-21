const imgArray = [
    '../Imagenes/mc1.jpg',
    '../Imagenes/mc2.jpg',
    '../Imagenes/mc3.jpg',
    '../Imagenes/mc4.jpg',
    '../Imagenes/mc5.jpeg'
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