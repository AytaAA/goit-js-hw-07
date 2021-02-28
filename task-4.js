/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса */

const countEventDec = document.querySelector('[data-action="decrement"]')
const countEventInc = document.querySelector('[data-action="increment"]')
const countEventSpan = document.querySelector("#value")
let value = 0

countEventDec.addEventListener("click", () => {
    value -= 1
    count()
})

countEventInc.addEventListener("click", () => {
    value += 1
    count()
})

function count() {
    countEventSpan.textContent = value
}
