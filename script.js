const buyItbutton = document.getElementById("buy-it");
const introductionbutton = document.getElementById("introduction");
function click(e) {
  const keyword = document.getElementById("keyword").value;
  if (e.target === buyItbutton) {
    showColor();
    showType();
    const showName = document.getElementById("showName");
    showName.innerText = keyword;
    alert(
      `${keyword}您好!!謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您報價！`
    );
    return;
  } else if (e.target === introductionbutton) {
    return alert("我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！");
  }
}
buyItbutton.addEventListener("click", click);
buyItbutton.addEventListener("click", (e) => {
  e.preventDefault();
});
introductionbutton.addEventListener("click", click);
function showColor() {
  const menu = document.getElementById("my-colors");
  const idx = menu.selectedIndex;
  const showColor = document.getElementById("showColor");

  const selectedText = menu.options[idx].text;
  showColor.innerText = selectedText;
}
function showType() {
  const menu = document.getElementById("cloth-type");
  const idx = menu.selectedIndex;
  const showType = document.getElementById("showType");
  const selectedText = menu.options[idx].text;
  showType.innerText = selectedText;
}
