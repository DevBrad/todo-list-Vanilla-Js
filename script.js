const listsContainer = document.querySelector("[data-lists]");

let lists = ["name", "todo"];

function render() {
  clearElement(listsContainer);
  lists.forEach((list) => {
    console.log(list);
    const listElement = document.createElement("li");
    listElement.classList.add("list-name");
    listElement.innerText = list;
    listsContainer.appendChild(listElement);
  });
}

function clearElement(element) {}

render();
