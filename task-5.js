/* Напиши скрипт который, при наборе текста
в инпуте input#name - input(событие input),
  подставляет его текущее значение
в span#name - output.Если инпут пустой,
  в спане должна отображаться строка 'незнакомец'. */

const inpText = document.querySelector("#name-input")
const inpSpan = document.querySelector("#name-output")

inpText.addEventListener("input", onInputChange)

function onInputChange(event) {
    return event.currentTarget.value === ""
        ? (inpSpan.textContent = "незнакомец")
        : (inpSpan.textContent = event.currentTarget.value)
}
