"use strict"; //엄격하게 js로 선언

//기능// 생성,삭제,수정

//상수 선언
const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const popupTitle = popupBox.querySelector("header p");
const closeIcon = popupBox.querySelector("header i");
const nameTag = popupBox.querySelector("#name");
const titleTag = popupBox.querySelector("#title");
const descTag = popupBox.querySelector("textarea");
const addBtn = popupBox.querySelector("button");

const months = [
  // 월이름 배열만들기
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
//존재하는 경우 localstorage 메모를 가져오고 js 객체로 구문 분석하고 그렇지 않으면 메모에 빈 배열을 전달함
const notes = JSON.parse(localStorage.getItem("notes") || "[]");

//글 수정하고 등록시 복제 되는 것 막기
let isUpdate = false,
  updateId;

//show 클래스 줘서 popup창 열기,닫기
addBox.addEventListener("click", () => {
  nameTag.focus();
  popupBox.classList.add("show");
});
//show 클래스 줘서 popup창 열기,닫기
closeIcon.addEventListener("click", () => {
  isUpdate = false;
  //closeIcon 클릭 후 작성 글자 초기화
  nameTag.value = "";
  titleTag.value = "";
  descTag.value = "";
  addBtn.innerText = "등록";
  popupTitle.innerHTML = "문의 남겨주세요";
  popupBox.classList.remove("show");
});

function showNotes() {
  document.querySelectorAll(".note").forEach((note) => note.remove()); //새 note 추가하기 전에 이전 note 모두 제거//복제오류방지
  notes.forEach((note, index) => {
    let liTag = `<li class="note">
                  <div class="details">
                    <p>${note.name}</p>
                    <p>${note.title}</p>
                    <span>${note.descriotion}</span>
                  </div>
                  <div class="bottom-content">
                    <span>${note.date}</span>
                    <div class="settings">
                      <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                      <ul class="menu">
                        <li onclick="updateNote(${index},'${note.name}','${note.title}','${note.descriotion}')"><i class="uil uil-pen"></i>Edit</li>
                        <li onclick="deleteNote(${index})"><i class="uil uil-trash"></i>Delete</li>
                      </ul>
                    </div>
                  </div>
                </li>`;
    addBox.insertAdjacentHTML("afterend", liTag); //(position, text)
  });
}
showNotes();
//settings박스---------------v------------------
function showMenu(elem) {
  elem.parentElement.classList.add("show");
  document.addEventListener("click", (e) => {
    //아무곳 클릭 시 설정 메뉴에서 쇼 클래스 제거/닫힘
    if (e.target.tagName != "I" || e.target != elem) {
      elem.parentElement.classList.remove("show");
    }
  });
}

function deleteNote(noteId) {
  let confirmDel = confirm("이 글을 삭제하시겠습니까");
  if (!confirmDel) return;
  notes.splice(noteId, 1); //array/tasks에서 선택한 메모 제거
  //stringify 문자열로 변환해야됨
  localStorage.setItem("notes", JSON.stringify(notes)); //업데이트된 메모를 localstorage에 저장

  showNotes();
}

function updateNote(noteId, name, title, desc) {
  isUpdate = true;
  updateId = noteId;
  addBox.click();
  nameTag.value = name;
  titleTag.value = title;
  descTag.value = desc;
  addBtn.innerText = "업데이트";
  popupTitle.innerHTML = "게시글 수정";
  console.log(noteId, name, title, desc);
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //이름,제목,내용 입력값 받아오면서 변수 만들기
  let noteName = nameTag.value;
  let noteTitle = titleTag.value;
  let noteDesc = descTag.value;

  if (noteName || noteTitle || noteDesc) {
    let dateObj = new Date(); //현재 시간 생성
    // 년,월,일 빼오기
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth();
    let day = dateObj.getDate();

    let noteInfo = {
      //객체 생성해서 아래쪽에 배열로 만듬
      name: noteName,
      title: noteTitle,
      descriotion: noteDesc,
      date: `${year}년 ${month}월 ${day}일`,
    };
    if (!isUpdate) {
      notes.push(noteInfo); //note에 새로운 note 추가
    } else {
      isUpdate = false;
      notes[updateId] = noteInfo; //지정된 메모 업데이트
    }
    // notes 로컬스토리지에 저장 로컬스토리지에 object저장되있어서
    //stringify 문자열로 변환해야됨
    localStorage.setItem("key", JSON.stringify(notes));

    closeIcon.click(); //등록버튼에 closeIcon클릭효과 넣음
    showNotes();
  }
});
