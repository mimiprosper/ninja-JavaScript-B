const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span> <i class="far fa-trash-alt delete"></i>
                </li>`;
  list.innerHTML += html;
};

// add todos
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = addForm.add.value.trim(); // get whatever is typed in the form and trims of whitesapces
  if (todo.length) {  // todo lenght evalutes to true then execute generateTemplate function
    generateTemplate(todo);
    addForm.reset(); // trims whitespaces after typing and before submitting the inputs
  }
});

// delete todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
  
const filterTodos = (term) => {
  Array.from(list.children) // covert HTML collection to an array
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children) // covert HTML collection to an array
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

// search & filter... keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
