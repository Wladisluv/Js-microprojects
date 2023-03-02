const todoInput = document.querySelector('.todo__input');
const todoAddBtn = document.querySelector('.todo__add-btn');
const todoList = document.querySelector('.todo__list');

    todoAddBtn.addEventListener('click', () => {
        let userTask = todoInput.value.trim();
    
        if(userTask) {
            if(!todos) {
                todos = [];
            }

            todoInput.value = '';
            let taskInfo = {name: userTask};
            todos.push(taskInfo);
            localStorage.setItem('todo-list', JSON.stringify(todos));

            showTodos();
        }
    });

    const deleteTask = (deleteId) => {
        todos.splice(deleteId, 1);
        localStorage.setItem('todo-list', JSON.stringify(todos));
        showTodos();
    };

    let todos = JSON.parse(localStorage.getItem('todo-list'));

    const showTodos = () => {
        let li = '';
        todos.forEach((todo, id) => {
            li += `
            <li><i class="todo__delete-btn" onclick='deleteTask(${id})'></i>${todo.name}</li>
            `
        });
        todoList.innerHTML = li;
    }