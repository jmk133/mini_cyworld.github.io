const todo = document.querySelector("#todo");
const todoInput = todo.querySelector("input");
const todoList = document.querySelector("#todo-list");

let arr = []; // 기존에 localstorage에 저장된 거 유지하기 위해 let으로 선언

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(arr));
}

function deleteTodo(event){
    const li = event.target.parentElement; // event.target은 event가 발생한 요소를 반환
    li.remove(); // html에서 삭제
    arr = arr.filter((todo) => todo.id !== parseInt(li.id)); // !=은 단순히 값이 같은지 아닌지 반환, !==은 유형까지 포함해서 같은지 아닌지 반환
    saveToDos();
    if (arr.length === 0){
        todoList.classList.add("hidden");
    }
}

function scheduleTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodo(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    arr.push(newTodoObj); // 기록
    scheduleTodo(newTodoObj); // 출력
    saveToDos();
    todoInput.value = ""; // 입력하고 나서 초기화 할 때때
    todoList.classList.remove("hidden");
}

todo.addEventListener("submit",handleTodo);

const saved = localStorage.getItem("todos");

if (saved !== null){
    const parsedTodos = JSON.parse(saved); // localstorage에 리스트로 저장이 안 되기에 문자열로 변환
    arr = parsedTodos;
    parsedTodos.forEach(scheduleTodo);
}

if (arr.length === 0){
    todoList.classList.add("hidden");
} else {
    todoList.classList.remove("hidden");
}
