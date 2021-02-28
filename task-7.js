/* Напиши скрипт, который реагирует на изменение значения
input#font - size - control(событие input) и изменяет инлайн
  - стиль span#text обновляя свойство font - size.В результате
при перетаскивании ползунка будет меняться размер текста. */

const inpFont = document.querySelector("#font-size-control")
const inpSpan = document.querySelector("#text")

inpFont.addEventListener("input", dragScroll)

function dragScroll(event) {
    inpSpan.style.fontSize = event.currentTarget.value + "px"
}
