// const response = fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error fetching data: ", error));

// // console.log("test");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}

async function printTodos() {
  const todos = await getTodos();
  console.log(todos);
}

printTodos();
