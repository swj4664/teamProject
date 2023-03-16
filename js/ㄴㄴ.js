let imgBox = document.getElementsByClassName('imgBox')
const imgWrap = document.querySelectorAll('.img')
const img = document.querySelectorAll('img')

let count = 0;
let imgSize = document.querySelector('#imgContainer').clientWidth
console.log(imgSize)


// const slider = function slideShow() {
//     for (let i = 0; i < imgWrap.length; i++) {
//         imgWrap[i]
//     }
//     return
// }

function imgSlideShow() {
    if (count < imgWrap.length) {
        count++
        document.querySelector('.imgBox').style.transform = `translate(${count * -500}px)`

    }
    else if (count ===  imgWrap.length ) {
        document.querySelector('.imgBox').style.transform = `translate(0)`
        return count=0;

    }
}

setInterval(imgSlideShow, 1500)

// console.log(setInterval(imgSlideShow, 2000))
