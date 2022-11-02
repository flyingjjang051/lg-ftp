const tab = $(".tab");
const tabMenu = $(".tab .menu li");
const tabContents = $(".tab .contents > li");

tabMenu.on("click", function () {
  const idx = $(this).index();
  console.log("🚀 ~ file: common.js ~ line 7 ~ idx", idx);
  const siblings = $(this).siblings();
  $(this).addClass("on");
  siblings.removeClass("on");
  const selectedContents = tabContents.eq(idx);
  const contentsSiblings = selectedContents.siblings();
  selectedContents.addClass("on");
  contentsSiblings.removeClass("on");
});
