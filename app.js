(function () {
    var todos = [];
    var todoList = document.getElementById('todo-list');
    var totalCount = document.getElementById('total-count');
    var pendingCount = document.getElementById('pending-count');
    var completedCount = document.getElementById('completed-count');

    function updateCounts() {
        totalCount.textContent = todos.length;
        pendingCount.textContent = todos.filter(function(todo) { return !todo.completed; }).length;
        completedCount.textContent = todos.filter(function(todo) { return todo.completed; }).length;
    }

    function renderTodo(todo, index) {
        var li = document.createElement('li');
        li.className = 'todo-item';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', function () {
            toggleCompleted(index);
        });

        var text = document.createElement('span');
        text.textContent = todo.text;
        if (todo.completed) {
            text.className = 'completed';
        }

        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function () {
            var newText = prompt('Edit task:', todo.text);
            if (newText) {
                updateTodoText(index, newText);
            }
        });

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteTodo(index);
        });

        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        return li;
    }

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach(function (todo, index) {
            todoList.appendChild(renderTodo(todo, index));
        });
        updateCounts();
    }

    function addTodo() {
        var newTodoText = document.getElementById('new-todo').value;
        if (newTodoText) {
            todos.push({ text: newTodoText, completed: false });
            document.getElementById('new-todo').value = '';
            renderTodos();
        }
    }

    function toggleCompleted(index) {
        todos[index].completed = !todos[index].completed;
        renderTodos();
    }

    function updateTodoText(index, newText) {
        todos[index].text = newText;
        renderTodos();
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodos();
    }

    // Make the addTodo function accessible globally
    window.addTodo = addTodo;

    // Initial rendering
    renderTodos();
})();
