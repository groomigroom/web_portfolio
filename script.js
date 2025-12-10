const container = document.getElementById('container');
const sections = document.querySelectorAll('.section');
let current = 0;
let startY = 0;
let endY = 0;

document.addEventListener('mousedown', (e) => startY = e.clientY);
//   자바스크립트에서 addEventListener 는 정말 자주 쓰이는 핵심 함수예요.
// 한마디로 말하면 👉 “특정 이벤트가 발생했을 때 실행할 코드를 등록하는 함수” 입니다.
// 대상.addEventListener(이벤트이름, 실행할함수);
// 'mousedown' 마우스 버튼을 누르는 순간
document.addEventListener('mouseup', (e) => {
  endY = e.clientY;
  handleDrag();
});

const box = document.querySelector('.cursorstartspan');
let isOn = true;

setInterval(() => {
  isOn = !isOn; // true ↔ false 토글
  if (isOn) {
    box.classList.remove('off');
  } else {
    box.classList.add('off');
  }
}, 1000); // 1초마다 실행

//mouseup = “마우스 버튼을 눌렀다가 떼는 순간” 발생하는 이벤트
//두 줄짜리 실행문이라서 {}로 감싸고 있음.
//handleDrag() 함수를 호출 → 드래그 종료 처리 수행

//여기부터 분석하기~~~~~~~~~~~~~~~~~~~~~~~~~~

function handleDrag() {
  const delta = startY - endY;

  if (Math.abs(delta) < 50) return; // 짧은 드래그 무시

  if (delta > 0 && current < sections.length - 1) current++; // 아래로 드래그
  else if (delta < 0 && current > 0) current--; // 위로 드래그

  container.style.transform = `translateY(-${current * 100}vh)`;
}

// (e) => startY = e.clientY	이벤트가 발생하면 실행될 함수(콜백)
// e	이벤트 객체(event object) — 마우스 관련 정보(좌표, 버튼 등)를 담고 있음
// e.clientY	마우스가 눌린 시점의 세로 좌표(Y 위치)
// startY = e.clientY	이 Y값을 변수 startY에 저장
// 🔹 동작 원리 설명

// 사용자가 마우스를 누른 순간,
// 브라우저는 mousedown 이벤트를 발생시킵니다.

// addEventListener가 이를 감지하고, 등록된 함수를 실행합니다.

// 함수 (e) => startY = e.clientY 가 실행되며,

// e 안에 마우스 이벤트 정보가 자동으로 전달되고

// 그중 e.clientY(Y좌표 값)를 startY 변수에 저장합니다.

// 즉 👇

// “마우스를 누른 순간의 세로 위치를 startY라는 변수에 기억해 둬라.”

//화살표 함수 예를 들어,

// const sayHi = () => {
//   console.log('안녕하세요!');
// };


// 위 코드는 아래와 완전히 같은 의미입니다 👇

// const sayHi = function() {
//   console.log('안녕하세요!');
// };

// 포트폴리오 1번 팝업 열기
document.querySelector(".portone").addEventListener("click", function () {
  document.querySelector(".portonesebu").classList.add("on");
});

// 팝업 닫기
document.querySelector(".portonesebuclose").addEventListener("click", function () {
  document.querySelector(".portonesebu").classList.remove("on");
});

// 포트폴리오 2번 팝업 열기
document.querySelector(".porttwo").addEventListener("click", function () {
  document.querySelector(".porttwosebu").classList.add("on");
});

// 팝업 닫기
document.querySelector(".porttwosebuclose").addEventListener("click", function () {
  document.querySelector(".porttwosebu").classList.remove("on");
});

// 포트폴리오 3번 팝업 열기
document.querySelector(".portthree").addEventListener("click", function () {
  document.querySelector(".portthreesebu").classList.add("on");
});

// 팝업 닫기
document.querySelector(".portthreesebuclose").addEventListener("click", function () {
  document.querySelector(".portthreesebu").classList.remove("on");
});

// 포트폴리오 4번 팝업 열기
document.querySelector(".portfour").addEventListener("click", function () {
  document.querySelector(".portfoursebu").classList.add("on");
});

// 팝업 닫기
document.querySelector(".portfoursebuclose").addEventListener("click", function () {
  document.querySelector(".portfoursebu").classList.remove("on");
});

// 포트폴리오 5번 팝업 열기
document.querySelector(".portfive").addEventListener("click", function () {
  document.querySelector(".portfivesebu").classList.add("on");
});

// 팝업 닫기
document.querySelector(".portfivesebuclose").addEventListener("click", function () {
  document.querySelector(".portfivesebu").classList.remove("on");
});

// 포트폴리오 6번 팝업 열기
document.querySelector(".portsix").addEventListener("click", function () {
  document.querySelector(".portsixsebu").classList.add("on");
});

// 팝업 닫기
document.querySelector(".portsixsebuclose").addEventListener("click", function () {
  document.querySelector(".portsixsebu").classList.remove("on");
});

const portplus_one = document.querySelector(".portplus_one")
const portplus_one_sebu = document.querySelector(".portplus_one_sebu")
const portplus_one_sebuclose = document.querySelector(".portplus_one_sebuclose")

portplus_one.addEventListener("click", function(){
  portplus_one_sebu.classList.add("on")
})

portplus_one_sebuclose.addEventListener("click", function(){
  portplus_one_sebu.classList.remove("on")
})

document.querySelector(".portplus_two").addEventListener("click", function(){
  document.querySelector(".portplus_two_sebu").classList.add("on")
})

document.querySelector(".portplus_two_sebuclose").addEventListener("click", function(){
  document.querySelector(".portplus_two_sebu").classList.remove("on")
})

document.querySelector(".portplus_three").addEventListener("click", function(){
  document.querySelector(".portplus_three_sebu").classList.add("on")
})

document.querySelector(".portplus_three_sebuclose").addEventListener("click", function(){
  document.querySelector(".portplus_three_sebu").classList.remove("on")
})


