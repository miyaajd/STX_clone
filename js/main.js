window.addEventListener("load", function () {
  // gnb 에 마우스 엔터 했을때
  const nav = document.querySelector(".gnb");
  const headerBg = document.querySelector(".header-bg");
  nav.addEventListener("mouseenter", function () {
    headerBg.style.height = "400px";
  });
  //gnb 에 마우스 아웃 했을때
  nav.addEventListener("mouseleave", function () {
    headerBg.style.height = "0px";
  });
});
