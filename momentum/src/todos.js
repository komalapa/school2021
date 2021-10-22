const todosWrp = document.createElement('div');
todosWrp.classList.add('todos-wrp');

app.append(todosWrp)
const todoTitle = document.createElement('h3')
todoTitle.innerText = `${lang==='en' ? 'ToDo':'План'}`;
todosWrp.append(todoTitle)
const todos = [];
const savedTodos = localStorage.getItem('momentToDos');
if (savedTodos) todos.push(...JSON.parse(savedTodos));
console.log(savedTodos)

function addToDo(name = '', done = false){
    const item = {name,done};
    todos.push(item)
    reloadTodos()
}
function removeToDo(index){
    console.log(todos)
    todos.splice(index,1);
    console.log(todos)
    reloadTodos()
}

function toggleDone(i){
    todos[i].done = todos[i].done ? false : true;
}

const todosEl = document.createElement('ul');
todosEl.classList.add('todos');

todosWrp.append(todosEl);

const todoInput = document.createElement('input');
todoInput.type = 'text';
todoInput.maxLength = 50;
todoInput.classList.add('todos-input');
todoInput.placeholder = `${lang==='en' ? 'add new todo':'Новое дело'}`;
todoInput.addEventListener('change', (e)=>{
    addToDo(e.target.value);
    e.target.value = '';
});

todosWrp.append(todoInput)

function reloadTodos(){
    localStorage.setItem('momentToDos', JSON.stringify(todos));
    todosEl.innerHTML = '';
    todos.forEach((todo,i) =>{
        const todoEl = document.createElement('li');
        todoEl.dataset.index = i;
        todoEl.classList.add('todos-item');
        todoEl.addEventListener('click',() =>{
            toggleDone(i);
            if (todos[i].done) {
                todoEl.classList.remove('todos-item-done');
            } else {
                todoEl.classList.add('todos-item-done');
            }
        })
        const todoText = document.createElement('span')
        todoText.classList.add('todos-item-text')
        todoText.innerText = todos[i].name;
        const todoDelete = document.createElement('span')
        todoDelete.classList.add('todos-item-delete','icon-trash-o');
        todoDelete.addEventListener('click',()=>{
            if (confirm(`${lang==='en'
                        ? 'Do you want to delete this item? ('+todos[i].name+')'
                        :'Удалить этот элемент? ('+todos[i].name+')'}`)){
                            removeToDo(i)
                        }
        })
        if (todos[i].done) todoEl.classList.add('todos-item-done')
        todoEl.append(todoText,todoDelete);
        todosEl.append(todoEl)
    })
}

function changeTodoLang(){
    todoInput.placeholder = `${lang==='en' ? 'add new todo':'Новое дело'}`; 
    todoTitle.innerText = `${lang==='en' ? 'ToDo':'План'}`;
}

reloadTodos()