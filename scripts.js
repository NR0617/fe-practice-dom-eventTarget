console.log("버튼만들기 시작");

let btnAmericano = document.createElement("button");
btnAmericano.textContent = "아아아메리카노";
btnAmericano.classList.add("btn");
let btnCaffeLatte = document.createElement("button");
btnCaffeLatte.textContent = "카ㅍㅔ라ㅌㅔ";
btnCaffeLatte.classList.add("btn");

let container = document.querySelector("#btnContainer");
container.append(btnAmericano, btnCaffeLatte);

let menus = document.querySelectorAll("button");
// console.log(btn);

let americano = menus[0];
let latte = menus[1];
// console.log(americano, latte);

btnAmericano.onclick = handleClick;
btnCaffeLatte.onclick = handleClick;
americano.onclick = handleClick;
latte.onclick = handleClick;

function handleClick(e) {
    let currentMenu = e.target.textContent;
    console.log(currentMenu);
}
