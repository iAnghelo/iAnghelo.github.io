const imgArray = [
    '../Imagenes/slider1.jpg','../Imagenes/slider2.jpg','../Imagenes/slider7.jpg','../Imagenes/slider4.jpg','../Imagenes/slider5.jpg','../Imagenes/slider6.jpg'
]
const img = document.querySelector('#slide')
let i = 0
const slideShow = () => {
    img.src = imgArray[i]
    i = ( i < imgArray.length - 1) ? i+1 : 0
}
const interval = () => {
    setInterval(slideShow, 1800)
}