//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//  после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().
const ulIngred = document.querySelector("#ingredients")
const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"]

const makeIngUl = (newIngUl) => {
    return newIngUl.map((elem) => {
        const ingredientsListChildren = document.createElement("li")
        ingredientsListChildren.textContent = elem
        return ingredientsListChildren
    })
}
const ingListChild = makeIngUl(ingredients)
ulIngred.append(...ingListChild)
