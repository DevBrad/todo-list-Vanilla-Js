const listsContainer = document.querySelector("[data-lists]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");

let lists = [
  {
    id: 1,
    name: "name",
  },
  {
    id: 2,
    name: "todo",
  },
];

newListForm.addEventListener("submit", (e) => {
  //   console.log(e);
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === "") return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  render();
});

function createList(name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
}

function render() {
  clearElement(listsContainer);
  lists.forEach((list) => {
    // console.log(list);
    const listElement = document.createElement("li");
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerText = list.name;
    listsContainer.appendChild(listElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    //if the ul has a first child let's remove it / so this is going to remove all the children of the ul element
    element.removeChild(element.firstChild);
  }
}

render();
