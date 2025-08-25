window.addEventListener("load", function () {
  // a태그 초기화
  const aTag = this.document.querySelectorAll("a");
  aTag.forEach(function (a) {
    a.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
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
  // visual Btn
  const visualBtn =this.document.querySelector(".visual-btn")
  const business =this.document.querySelector(".business")
  visualBtn.addEventListener("click" , ()=>{
    this.window.scrollTo({
      top: business.offsetTop,
    })
  })
  // cs Menu click
  const csMenu = this.document.querySelector("#csMenu")
  const cs = this.document.querySelector("#cs")
  csMenu.addEventListener("click", ()=>{
    this.window.scrollTo({
      top : cs.offsetTop,
    })
  })
});
