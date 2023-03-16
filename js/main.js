
let imgBox = document.querySelector('.imgBox')
let imgBoxAll = document.querySelectorAll('.imgBox')
const imgWrap = document.querySelectorAll('.img1')
let cloneFirst = imgWrap[0].cloneNode(true); // 요소 복사
let cloneLast = imgWrap[imgWrap.length - 1].cloneNode(true);
imgBox.insertBefore(cloneLast, imgWrap[0]);
imgBox.appendChild(cloneFirst);

let btn = document.querySelector('.section1 .btn') // 버튼 클릭 함수 실행을 위한 변수
let btnAll = document.querySelectorAll('.section1 .btn') // 버튼 클릭 함수 실행을 위한 변수
let count = 0;

document.querySelector('.imgBox').style.left = '-500px'

function imgSlideShow() {
    imgBox.style.transition = `all .7s`;
    if (count < imgWrap.length-1) {
        count++
        imgBox.style.transform = `translate(${count * -500}px)`
        // 슬라이드 움직임에 맞춰 버튼 색상 변하게 하기
        btnAll.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll[count].style.background = 'rgb(255, 255, 255, 1)'
    }
    else if (count == imgWrap.length-1) {
        imgBox.style.transform = `translate(${(count+1) * -500}px)`
        // 슬라이드 움직임에 맞춰 버튼 색상 변하게 하기
        btnAll.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll[0].style.background = 'rgb(255, 255, 255, 1)'
        setTimeout(()=>{
            imgBox.style.transition = `0s`;
            imgBox.style.transform = `translateX(0px)`;
        },700)
        count = 0;
    }
}


// 첫번째 버튼 색상 
btnAll[0].style.background = 'rgb(255, 255, 255, 1)'
// 버튼 클릭시 슬라이드 함수
function btnClick(event) {
    imgBox.style.transition = `all .7s`;
    //클릭한 버튼의 값을 가져옴
    let btnValue = event.target.value
    // 클릭하는 버튼 색상 변화
    btnAll.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
    btnAll[btnValue].style.background = 'rgb(255, 255, 255, 1)'
    document.querySelector('.imgBox').style.transform = `translate(${btnValue * -500}px)`
    count = btnValue
    if(btnValue == 0) {
        return count = 0
    }
}

function prevSlide() {
    imgBox.style.transition = `all .7s`;
    if (count > 0) {
        count--
        document.querySelector('.imgBox').style.transform = `translate(${count * -500}px)`
        btnAll.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll[count].style.background = 'rgb(255, 255, 255, 1)'
    } else if (count === 0) {
        console.log('asd')
        imgBox.style.transform = `translate(500px)`
        // 슬라이드 움직임에 맞춰 버튼 색상 변하게 하기
        btnAll.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll[imgWrap.length - 1].style.background = 'rgb(255, 255, 255, 1)'
        setTimeout(()=>{
            imgBox.style.transition = `0s`;
            imgBox.style.transform = `translateX(${(imgWrap.length-1)*-500}px)`;
        },700)
        return count = imgWrap.length-1;
    }
}

function nextSlide() {
    imgBox.style.transition = `all .7s`;
    if (count < imgWrap.length - 1) {
        count++
        document.querySelector('.imgBox').style.transform = `translate(${count * -500}px)`
        btnAll.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll[count].style.background = 'rgb(255, 255, 255, 1)'
    } else if (count === imgWrap.length-1) {
        imgBox.style.transform = `translate(${(count+1) * -500}px)`
        // 슬라이드 움직임에 맞춰 버튼 색상 변하게 하기
        btnAll.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll[0].style.background = 'rgb(255, 255, 255, 1)'
        setTimeout(()=>{
            imgBox.style.transition = `0s`;
            imgBox.style.transform = `translateX(0px)`;
        },700)
        return count = 0;
    }
}


// setInterval(imgSlideShow, 1500)

//----------------section2

const imgWrap2 = document.querySelectorAll('.img2')
let imgBox2 = document.getElementsByClassName('.imgBox2')
let count2 = 0;
let btn2 = document.querySelector('.section2 .btn') // 버튼 클릭 함수 실행을 위한 변수
let btnAll2 = document.querySelectorAll('.section2 .btn') // 버튼 클릭 함수 실행을 위한 변수

function imgSlideShow2() {
    if (count2 < imgWrap2.length - 1) {
        count2++
        document.querySelector('.imgBox2').style.transform = `translate(${count2 * -500}px)`
        // 슬라이드 움직임에 맞춰 버튼 색상 변하게 하기
        btnAll2.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll2[count2].style.background = 'rgb(255, 255, 255, 1)'
    }
    else if (count2 === imgWrap2.length - 1) {
        document.querySelector('.imgBox2').style.transform = `translate(0)`
        // 슬라이드 움직임에 맞춰 버튼 색상 변하게 하기
        btnAll2.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll2[0].style.background = 'rgb(255, 255, 255, 1)'

        return count2 = 0;
    }

}

// 첫번째 버튼 색상 
btnAll2[0].style.background = 'rgb(255, 255, 255, 1)'

// 버튼 클릭시 슬라이드 함수
function btnClick2(event) {
    //클릭한 버튼의 값을 가져옴
    let btnValue2 = event.target.value
    count2 = btnValue2
    // 클릭하는 버튼 색상 변화
    btnAll2.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
    btnAll2[btnValue2].style.background = 'rgb(255, 255, 255, 1)'

    document.querySelector('.imgBox2').style.transform = `translate(${btnValue2 * -500}px)`
    return;

}

function prevSlide2() {
    if (count2 > 0) {
        count2--
        document.querySelector('.imgBox2').style.transform = `translate(${count2 * -500}px)`
        btnAll2.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll2[count2].style.background = 'rgb(255, 255, 255, 1)'
    } else if (count2 === imgWrap2.length - 1) {
        return count2 = 0;
    }
}

function nextSlide2() {
    if (count2 < imgWrap2.length - 1) {
        count2++
        document.querySelector('.imgBox2').style.transform = `translate(${count2 * -500}px)`
        btnAll2.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll2[count2].style.background = 'rgb(255, 255, 255, 1)'
    } else if (count2 === imgWrap2.length) {
        return count2 = -1;
    }
}



// setInterval(imgSlideShow2, 1500)
//--------------------- section2

//------------------------- section3 

const imgWrap3 = document.querySelectorAll('.img3')
let imgBox3 = document.getElementsByClassName('.imgBox3')
let count3 = 0;
let btn3 = document.querySelector('.section3 .btn') // 버튼 클릭 함수 실행을 위한 변수
let btnAll3 = document.querySelectorAll('.section3 .btn') // 버튼 클릭 함수 실행을 위한 변수

function imgSlideShow3() {
    if (count3 < imgWrap3.length - 1) {
        count3++
        document.querySelector('.imgBox3').style.transform = `translate(${count3 * -500}px)`
        // 슬라이드 움직임에 맞춰 버튼 색상 변하게 하기
        btnAll3.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll3[count3].style.background = 'rgb(255, 255, 255, 1)'
    }
    else if (count3 === imgWrap3.length - 1) {
        document.querySelector('.imgBox3').style.transform = `translate(0)`
        // 슬라이드 움직임에 맞춰 버튼 색상 변하게 하기
        btnAll3.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll3[0].style.background = 'rgb(255, 255, 255, 1)'

        return count3 = 0;
    }

}

// 첫번째 버튼 색상 
btnAll3[0].style.background = 'rgb(255, 255, 255, 1)'

// 버튼 클릭시 슬라이드 함수
function btnClick3(event) {
    //클릭한 버튼의 값을 가져옴
    let btnValue3 = event.target.value
    count3 = btnValue3
    // 클릭하는 버튼 색상 변화
    btnAll3.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
    btnAll3[btnValue3].style.background = 'rgb(255, 255, 255, 1)'

    document.querySelector('.imgBox3').style.transform = `translate(${btnValue3 * -500}px)`
    return;

}

function prevSlide3() {
    if (count3 > 0) {
        count3--
        document.querySelector('.imgBox3').style.transform = `translate(${count3 * -500}px)`
        btnAll3.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll3[count3].style.background = 'rgb(255, 255, 255, 1)'
    } else if (count3 === imgWrap3.length - 1) {
        return count3 = 0;
    }
}

function nextSlide3() {
    if (count3 < imgWrap3.length - 1) {
        count3++
        document.querySelector('.imgBox3').style.transform = `translate(${count3 * -500}px)`
        btnAll3.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll3[count3].style.background = 'rgb(255, 255, 255, 1)'
    } else if (count3 === imgWrap3.length) {
        return count3 = -1;
    }
}


// setInterval(imgSlideShow3, 1500)


//-------------------------------------------------------- section3


//------------------------- section4

const imgWrap4 = document.querySelectorAll('.img4')
let imgBox4 = document.getElementsByClassName('.imgBox4')
let count4 = 0;
let btn4 = document.querySelector('.section4 .btn') // 버튼 클릭 함수 실행을 위한 변수
let btnAll4 = document.querySelectorAll('.section4 .btn') // 버튼 클릭 함수 실행을 위한 변수

function imgSlideShow4() {
    if (count4 < imgWrap4.length - 1) {
        count4++
        document.querySelector('.imgBox4').style.transform = `translate(${count4 * -500}px)`
        // 슬라이드 움직임에 맞춰 버튼 색상 변하게 하기
        btnAll4.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll4[count4].style.background = 'rgb(255, 255, 255, 1)'
    }
    else if (count4 === imgWrap4.length - 1) {
        document.querySelector('.imgBox4').style.transform = `translate(0)`
        // 슬라이드 움직임에 맞춰 버튼 색상 변하게 하기
        btnAll4.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll4[0].style.background = 'rgb(255, 255, 255, 1)'

        return count4 = 0;
    }

}

// 첫번째 버튼 색상 
btnAll4[0].style.background = 'rgb(255, 255, 255, 1)'

// 버튼 클릭시 슬라이드 함수
function btnClick4(event) {
    //클릭한 버튼의 값을 가져옴
    let btnValue4 = event.target.value
    count4 = btnValue4
    // 클릭하는 버튼 색상 변화
    btnAll4.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
    btnAll4[btnValue4].style.background = 'rgb(255, 255, 255, 1)'

    document.querySelector('.imgBox4').style.transform = `translate(${btnValue4 * -500}px)`
    return;

}

function prevSlide4() {
    if (count4 > 0) {
        count4--
        document.querySelector('.imgBox4').style.transform = `translate(${count4 * -500}px)`
        btnAll4.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll4[count4].style.background = 'rgb(255, 255, 255, 1)'
    } else if (count4 === imgWrap4.length - 1) {
        return count4 = 0;
    }
}

function nextSlide4() {
    if (count4 < imgWrap4.length - 1) {
        count4++
        document.querySelector('.imgBox4').style.transform = `translate(${count4 * -500}px)`
        btnAll4.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll4[count4].style.background = 'rgb(255, 255, 255, 1)'
    } else if (count4 === imgWrap4.length) {
        return count4 = -1;
    }
}


// setInterval(imgSlideShow4, 1500)

//-------------------------------------------------------- section4


//------------------------- section5

const imgWrap5 = document.querySelectorAll('.img5')
let imgBox5 = document.getElementsByClassName('.imgBox5')
let count5 = 0;
let btn5 = document.querySelector('.section5 .btn') // 버튼 클릭 함수 실행을 위한 변수
let btnAll5 = document.querySelectorAll('.section5 .btn') // 버튼 클릭 함수 실행을 위한 변수

function imgSlideShow5() {
    if (count5 < imgWrap5.length - 1) {
        count5++
        document.querySelector('.imgBox5').style.transform = `translate(${count5 * -500}px)`
        // 슬라이드 움직임에 맞춰 버튼 색상 변하게 하기
        btnAll5.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll5[count5].style.background = 'rgb(255, 255, 255, 1)'
    }
    else if (count5 === imgWrap5.length - 1) {
        document.querySelector('.imgBox5').style.transform = `translate(0)`
        // 슬라이드 움직임에 맞춰 버튼 색상 변하게 하기
        btnAll5.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll5[0].style.background = 'rgb(255, 255, 255, 1)'

        return count5 = 0;
    }

}

// 첫번째 버튼 색상 
btnAll5[0].style.background = 'rgb(255, 255, 255, 1)'

// 버튼 클릭시 슬라이드 함수
function btnClick5(event) {
    //클릭한 버튼의 값을 가져옴
    let btnValue5 = event.target.value
    count5 = btnValue5
    // 클릭하는 버튼 색상 변화
    btnAll5.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
    btnAll5[btnValue5].style.background = 'rgb(255, 255, 255, 1)'

    document.querySelector('.imgBox5').style.transform = `translate(${btnValue5 * -500}px)`
    return;

}

function prevSlide5() {
    if (count5 > 0) {
        count5--
        document.querySelector('.imgBox5').style.transform = `translate(${count5 * -500}px)`
        btnAll5.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll5[count5].style.background = 'rgb(255, 255, 255, 1)'
    } else if (count5 === imgWrap5.length - 1) {
        return count5 = 0;
    }
}

function nextSlide5() {
    if (count5 < imgWrap5.length - 1) {
        count5++
        document.querySelector('.imgBox5').style.transform = `translate(${count5 * -500}px)`
        btnAll5.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        btnAll5[count5].style.background = 'rgb(255, 255, 255, 1)'
    } else if (count5 === imgWrap5.length) {
        return count5 = -1;
    }
}


// setInterval(imgSlideShow5, 1500)

//-------------------------------------------------------- section5

// ---------------------------------- 로그인 페이지 세팅
function show() {

    document.querySelector('.loginPage').style.display = "block"


    return;

}

function shows() {
    document.querySelector('.loginPage').style.display = "none";
    document.querySelector('.loginPage2').style.display = "block";

    return;
}

function reshow() {

    document.querySelector('.loginPage2').style.display = "none";
    document.querySelector('.loginPage').style.display = "block";

    return;

}

//--------------------------------------------- 로그인 페이지

//----------------------------------------------------------- 닫기버튼

function close() {
    document.querySelector('.loginPage .close i').addEventListener('click', function () {
        document.querySelector('.loginPage').style.display = "none";
    })
}

close();

function close2() {
    document.querySelector('.loginPage2 .close2 i').addEventListener('click', function () {
        document.querySelector('.loginPage2').style.display = "none";
    })
}

close2();

//-------------------------------------------------------------------------------------- 닫기


// 스크롤 슬라이드
const mainBtn = document.querySelectorAll('.mainBtn > li');
const target = document.querySelector('.section');
const target_top = target.getBoundingClientRect().height;

let forSlide = 1
mainBtn.forEach(i => {
    i.addEventListener('click', (e) => {
        const num = i.value;
        forSlide = num
        mHtml.animate({ scrollTop: ((num - 1) * target_top) });
        mainBtn.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        mainBtn[forSlide - 1].style.background = 'rgb(255, 255, 255, 1)'
    })
})
mainBtn[0].style.background = 'rgb(255, 255, 255, 1)'
    for(let i in imgBoxAll)


// 스크롤이벤트
var mHtml = $("html");
// 새로고침시 원래자리로 돌아옴
mHtml.animate({ scrollTop: 0 }, 500);

$(window).on("wheel", function (e) {
    document.querySelector('.imgBox').style.transform = `translate(0px)`
    document.querySelector('.imgBox2').style.transform = `translate(0px)`
    document.querySelector('.imgBox3').style.transform = `translate(0px)`
    document.querySelector('.imgBox4').style.transform = `translate(0px)`
    document.querySelector('.imgBox5').style.transform = `translate(0px)`
    if (mHtml.is(":animated")) return;
    if (e.originalEvent.deltaY > 0) {
        if (forSlide == 5) return;
        mainBtn.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        mainBtn[forSlide].style.background = 'rgb(255, 255, 255, 1)'
        forSlide++;
    } else if (e.originalEvent.deltaY < 0) {
        if (forSlide == 1) return;
        mainBtn.forEach((i) => i.style.background = 'rgb(255, 255, 255, .5)')
        mainBtn[forSlide - 2].style.background = 'rgb(255, 255, 255, 1)'
        forSlide--;
    }
    var posTop = (forSlide - 1) * target_top;
    mHtml.animate({ scrollTop: posTop });
    return count = 0;
})


//=========================================== 마우스 호버 이벤트

let imgContainer = document.querySelector('.slideG1') //마우스 호버시 슬라이드 멈추기 위한 변수

// 호버시 슬라이드 막기

let slideControl = setInterval(imgSlideShow, 3000)

imgContainer.addEventListener('mouseover', () => {
    clearInterval(slideControl)
})
imgContainer.addEventListener('mouseout', () => {
    return slideControl = setInterval(imgSlideShow, 3000)
})



//=========================================== 마우스 호버 이벤트2

let imgContainer2 = document.querySelector('.imgBox2') //마우스 호버시 슬라이드 멈추기 위한 변수

// 호버시 슬라이드 막기

let slideControl2 = setInterval(imgSlideShow2, 3000)

imgContainer2.addEventListener('mouseover', () => {
    clearInterval(slideControl2)
})
imgContainer2.addEventListener('mouseout', () => {
    return slideControl2 = setInterval(imgSlideShow2, 3000)
})


//=========================================== 마우스 호버 이벤트3

let imgContainer3 = document.querySelector('.imgBox3') //마우스 호버시 슬라이드 멈추기 위한 변수

// 호버시 슬라이드 막기

let slideControl3 = setInterval(imgSlideShow3, 3000)

imgContainer3.addEventListener('mouseover', () => {
    clearInterval(slideControl3)
})
imgContainer3.addEventListener('mouseout', () => {
    return slideControl3 = setInterval(imgSlideShow3, 3000)
})



// //=========================================== 마우스 호버 이벤트4

let imgContainer4 = document.querySelector('.imgBox4') //마우스 호버시 슬라이드 멈추기 위한 변수

// 호버시 슬라이드 막기

let slideControl4 = setInterval(imgSlideShow4, 3000)

imgContainer4.addEventListener('mouseover', () => {
    clearInterval(slideControl4)
})
imgContainer4.addEventListener('mouseout', () => {
    return slideControl4 = setInterval(imgSlideShow4, 3000)
})


// //=========================================== 마우스 호버 이벤트

let imgContainer5 = document.querySelector('.imgBox5') //마우스 호버시 슬라이드 멈추기 위한 변수

// 호버시 슬라이드 막기

let slideControl5 = setInterval(imgSlideShow5, 3000)

imgContainer5.addEventListener('mouseover', () => {
    clearInterval(slideControl5)
})
imgContainer5.addEventListener('mouseout', () => {
    return slideControl5 = setInterval(imgSlideShow5, 3000)
})







