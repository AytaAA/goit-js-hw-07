const ulList = document.querySelector("ul")

console.log(`В списке ${ulList.children.length} категории.`)

const ulListChildren = document.querySelector("ul").children

for (let elem of ulListChildren) {
    console.log(`• Категория:`, elem.querySelector("h2").textContent)
    console.log(`• Количество элементов:`, elem.querySelector("ul").children.length)
}
