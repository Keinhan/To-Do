const ul = document.querySelector("ul");
const add = document.getElementById("add");
const arrows = document.getElementById("arrows");
const sworra = document.getElementById("sworra");
const todos = [];

const addTodo = (todoText) => {
  todos.push(todoText);
  ul.innerHTML = "";
  for (const todo of todos) {
    const newLi = document.createElement("li");
    newLi.innerText = todo;
    const remove = document.createElement("img");
    remove.src = "./svg.svg";
    remove.addEventListener("click", function () {
      removeTodo(newLi);
    });
    newLi.appendChild(remove);
    ul.appendChild(newLi);
  }
};

const sortAlphabetically = () => {
  todos.sort((a, b) => a.localeCompare(b));
  ul.innerHTML = "";
  for (const todo of todos) {
    const newLi = document.createElement("li");
    newLi.innerText = todo;
    const remove = document.createElement("img");
    remove.src = "./svg.svg";
    remove.addEventListener("click", function () {
      removeTodo(newLi);
    });
    newLi.appendChild(remove);
    ul.appendChild(newLi);
  }
};

const sortAlphabeticallyReverse = () => {
  todos.sort((a, b) => a.localeCompare(b)).reverse();
  ul.innerHTML = "";
  for (const todo of todos) {
    const newLi = document.createElement("li");
    newLi.innerText = todo;
    const remove = document.createElement("img");
    remove.src = "./svg.svg";
    remove.addEventListener("click", function () {
      removeTodo(newLi);
    });
    newLi.appendChild(remove);
    ul.appendChild(newLi);
  }
};

const removeTodo = (liElement) => {
  const todoIndex = todos.findIndex((todo) => liElement.innerText === todo);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
  }
  liElement.remove();
};

add.addEventListener("click", () => {
  const input = document.getElementById("myInput");
  const inputValue = input.value;
  if (inputValue === "") {
    alert("Write Something ^^");
  } else {
    addTodo(inputValue);
    input.value = "";
  }
});

arrows.addEventListener("click", () => {
  sortAlphabetically();
  arrows.style.display = "none";
  sworra.style.display = "block";
});

sworra.addEventListener("click", () => {
  sortAlphabeticallyReverse();
  arrows.style.display = "block";
  sworra.style.display = "none";
});
