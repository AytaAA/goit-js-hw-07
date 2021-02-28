/* Напиши скрипт, который бы при потере фокуса на инпуте,
  проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается
в его атрибуте data - length.
Если введено подходящее количество, то border инпута
становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid. */

const inpCheck = document.querySelector("#validation-input")

inpCheck.addEventListener("blur", countLetters)

function countLetters(event) {
    const valueLength = event.currentTarget.value.length
    if (valueLength === Number(inpCheck.dataset.length)) {
        inpCheck.classList.add("valid")
        inpCheck.classList.remove("invalid")
    }
    if (valueLength !== Number(inpCheck.dataset.length)) {
        inpCheck.classList.add("invalid")
        inpCheck.classList.remove("valid")
    }
    if (valueLength === 0) {
        inpCheck.classList.remove("valid")
        inpCheck.classList.remove("invalid")
    }
}
