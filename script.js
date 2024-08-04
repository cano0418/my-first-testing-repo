const buyItbutton = document.getElementById("buy-it");
const introductionbutton = document.getElementById("introduction");
function buybuttonclick() {
  const keyword = document.getElementById("keyword").value;
  const qty = parseInt(document.getElementById("orderqty").value);
  if (keyword == "") {
    alert("煩請填寫您的大名。");
    return;
  } else if (qty <= 0 || isNaN(qty)) {
    alert("煩請輸入訂購數量。");
    return;
  } else if (qty < 100) {
    alert("抱歉，我們工廠的最低出貨量是 100 件。");
    return;
  } else if (qty > 5000) {
    alert("抱歉，我們工廠的最高出貨量是 5,000 件。");
    return;
  } else {
    buyalert2();
    showName();
    showStyle();
    showColor();
    showType();
    showQty();
    showAmount();
    alert(
      `${keyword}您好!!謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您報價！`
    );
  }
}
const intrbuttonclick = () =>
  alert("我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！");

buyItbutton.addEventListener("click", (e) => {
  buybuttonclick();
  e.preventDefault();
});
// buyItbutton.addEventListener("click", (e) => {
//   e.preventDefault();
// });
introductionbutton.addEventListener("click", intrbuttonclick);

function showName() {
  const keyword = document.getElementById("keyword").value;
  const showName = document.getElementById("showName");
  showName.innerText = keyword;
}
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
function showStyle() {
  const menu = document.getElementById("cloth-style");
  const idx = menu.selectedIndex;
  const showStyle = document.getElementById("showStyle");
  const selectedText = menu.options[idx].text;
  showStyle.innerText = selectedText;
}
function buyalert2() {
  const menu = document.getElementById("cloth-style");
  const idx = menu.selectedIndex;
  if (idx === 0) {
    return alert(
      "最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您帥氣領帶！"
    );
  } else if (idx === 1) {
    return alert(
      "最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您美麗圍巾！"
    );
  } else return;
}
function showQty() {
  const qty = parseInt(document.getElementById("orderqty").value);
  const showQty = document.getElementById("showQty");
  showQty.innerText = `${qty}件`;
}
function showAmount() {
  const qty = document.getElementById("orderqty").value;
  const menu = document.getElementById("cloth-style");
  const idx = menu.selectedIndex;
  const showAmount = document.getElementById("showAmount");
  if (idx === 0) {
    showAmount.innerText = `大約${qty * 600}元`;
    return;
  } else if (idx === 1) {
    showAmount.innerText = `大約${qty * 500}元`;
    return;
  } else return;
}
