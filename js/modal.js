window.addEventListener("load", function () {
  // 모달창 닫기
  const modal = this.document.querySelector(".modal-wrap");
  const close = this.document.querySelector(".modalClose");
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
  // scroll event
  const goTop = this.document.querySelector("#goTop");
  this.window.addEventListener("scroll", () => {
    if (this.document.documentElement.scrollTop > 1000) {
      goTop.style.display = "block";
    }else{
        goTop.style.display = "none";
    }
  });
});
