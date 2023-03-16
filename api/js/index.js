// --------------- 카카오맵 ---------------

var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(36.436373, 128.034173), // 지도의 중심좌표
    level: 13, // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 지도를 전달받은 위도, 경도 값으로 부드럽게 이동시키는 함수
function panTo(a, b) {
  var moveLatLon = new kakao.maps.LatLng(a, b);
  map.panTo(moveLatLon);
}
//----------------클러스터러 추가------------------
// var clusterer = new kakao.maps.MarkerClusterer({
//   // 마커들을 클러스터로 관리하고 표시할 지도 객체
//   map: map,
//   averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
//   minLevel: 6, // 클러스터 할 최소 지도 레벨
// });
//----------------클러스터러 추가------------------
//마커 이미지
var imageSrc = "https://img.icons8.com/nolan/2x/marker.png", // 마커이미지의 주소입니다
  imageSize = new kakao.maps.Size(40, 40); // 마커이미지의 크기입니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
//------------
// 화면에 마커를 표시하는 함수
var markers = [];
function addMarker(position) {
  var marker = new kakao.maps.Marker({
    map: map, //
    position: position,
    image: markerImage, //마커 이미지
  });
  marker.setMap(map);
  // 클러스터러에 마커들을 추가합니다
  // clusterer.addMarkers(markers);
  markers.push(marker);
  //-------------------------------------
  // var infowindow = new kakao.maps.InfoWindow({
  //   removable: true, //닫기 기능
  //   content: content,
  // });
  // kakao.maps.event.addListener(
  //   marker,
  //   "click",
  //   makeOverListener(map, marker, infowindow)
  // );

  return marker;
  //-------------------------------------
}
function setMarkers(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function showMarkers() {
  setMarkers(map);
}

function hideMarkers() {
  setMarkers(null);
}

//--------------------------------------
// // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
// function makeOverListener(map, marker, infowindow) {
//   infowindow.close();
//   return function () {
//     infowindow.open(map, marker);
//   };
// }

// // 인포윈도우를 닫는 클로저를 만드는 함수입니다
// function makeOutListener(infowindow) {
//   return function () {
//     infowindow.close();
//   };
// }

// ------------------------------------

var global = [];
$.get("info.json", function (data) {
  global = data.records;
  // cityMarker('강원도')     // 초기에 선택된 강원도 마크 표시를 위해 함수 호출
  useData(data.records);
  // useData2(data.records);

  for (var i in global) {
    var name = global[i].name;
    var intro = global[i].intro;
    var address = global[i].address;
    var Hp = global[i].Hp;
    // console.log(name, intro, address, Hp);
    var infowindow = new kakao.maps.InfoWindow({
      removable: true, //닫기 기능
      content: content,
    });
    var content =
      `<div class="overlaybox">` +
      `    <ul>` +
      `        <li class="up">` +
      `            <span class="number">${name}</span>` +
      `            <span class="title">${intro}</span>` +
      `        </li>` +
      `        <li>` +
      `            <span class="number">2</span>` +
      `            <span class="title">나</span>` +
      `        </li>` +
      `        <li>` +
      `            <span class="number">3</span>` +
      `            <span class="title">다</span>` +
      `        </li>` +
      `        <li>` +
      `            <span class="number">4</span>` +
      `            <span class="title">라</span>` +
      `        </li>` +
      `    </ul>` +
      `</div>`;
    kakao.maps.event.addListener(
      marker,
      "click",
      makeOverListener(map, marker, infowindow)
    );
    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      infowindow.close();
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  }
  //----------------------정보박스------------------------------
});

function cityMarker(city) {
  // 시도명을 인수로 받아 마크를 표시하는 함수선언
  let cityList = global.filter((a) => {
    let sidoList = a.sidoName.split(" ");
    return sidoList[0] === city;
  });

  for (let i in cityList) {
    addMarker(new kakao.maps.LatLng(cityList[i].lat, cityList[i].lng));
  }

  // 지도위치를 현재 선택한 도시의 첫번째 레코드의 위도, 경도값으로 이동하는 함수 호출
  panTo(cityList[0].lat, cityList[0].lng);
  // }
}

// 시도명을 인수로 받아 마크를 표시하는 함수선언
function cityMarker2(city) {
  let cityList = global.filter((a) => {
    let sidoList = a.sidoName.split(" ");
    return sidoList[1] === city;
  });
  for (let i in cityList) {
    addMarker(new kakao.maps.LatLng(cityList[i].lat, cityList[i].lng));
  }

  // 지도위치를 현재 선택한 도시의 첫번째 레코드의 위도, 경도값으로 이동하는 함수 호출
  panTo(cityList[0].lat, cityList[0].lng);
}

// 시도명을 인수로 받아 구군셀렉트를 나타내는 함수선언
function sebu(city) {
  let sebuList = [];
  let option = "";

  let cityList = global.filter((a) => {
    let sidoList = a.sidoName.split(" ");
    if (sidoList[0] === city) {
      return sidoList;
    }
  });

  for (let i in cityList) {
    let abc = [];
    abc = cityList[i].sidoName.split(" ");
    if (abc[1] != null) {
      sebuList.push(abc[1]);
    }
  }

  let sebuIndex = sebuList.filter((a, b) => sebuList.indexOf(a) === b);
  sebuIndex.sort();

  sebuIndex.map((a) => {
    option += `<option value="${a}">${a}</option>`;
  });

  $("#detail").html(option);
}

// 시도 목록을 button 상자에 표시하는 함수
function useData(globalData) {
  let list = globalData.map((a, b) => {
    let sidoList = a.sidoName.split(" ");
    return sidoList[0];
  });

  let cityIndex = list.filter((a, b) => list.indexOf(a) === b);
  cityIndex.sort();

  let button = "";

  cityIndex.map((value) => {
    button += `<button id="btnn" type="button" value="${value}">${value}</button>`;
  });

  $("#btn").html(button);
}
//원정씨---------------------
// var cc = "";
// function useData2(glo) {
//   let aa = [];
//   for (let i in glo) {
//     aa.push(glo[i].name);
//   }
//   cc = aa;
//   console.log(aa);
// }
//원정씨---------------------

//이벤트
$("#detail").change(function () {
  hideMarkers(); // 선택을 변경했을때 표시된 마커 숨기기
  let city = $(this).val(); // 선택된 시도명을 추출해서
  cityMarker2(city); // 마커를 표시하는 함수를 호출문에 넣어줌
});

$("#btn").click((e) => {
  hideMarkers();
  let city = e.target.value;
  cityMarker(city);
  sebu(city);
  $(this).addClass("on");
  map.getLevel = 10;
});

var level = map.getLevel();

// var content =
//   `<div class="overlaybox">` +
//   `    <ul>` +
//   `        <li class="up">` +
//   `            <span class="number"></span>` +
//   `            <span class="title">sdf</span>` +
//   `        </li>` +
//   `        <li>` +
//   `            <span class="number">2</span>` +
//   `            <span class="title">나</span>` +
//   `        </li>` +
//   `        <li>` +
//   `            <span class="number">3</span>` +
//   `            <span class="title">다</span>` +
//   `        </li>` +
//   `        <li>` +
//   `            <span class="number">4</span>` +
//   `            <span class="title">라</span>` +
//   `        </li>` +
//   `    </ul>` +
//   `</div>`;
