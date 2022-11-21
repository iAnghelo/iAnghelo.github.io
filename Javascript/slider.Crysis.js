const imgArray = [
    '../Imagenes/cry1.jpg',
    '../Imagenes/cry2.jpg',
    '../Imagenes/cry3.jpg',
    '../Imagenes/cry4.jpg',
    '../Imagenes/cry5.jpg',
    '../Imagenes/cry6.jpg'
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