document.addEventListener('DOMContentLoaded', () => {
    const todoTable = document.getElementById('todoTable').getElementsByTagName('tbody')[0];
    const addButton = document.getElementById('addButton');
  
    function loadTodos() {
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      todos.forEach(todo => addTodoRow(todo));
    }
  
    function saveTodos() {
      const todos = [];
      todoTable.querySelectorAll('tr').forEach(row => {
        const taskName = row.querySelector('.taskName').textContent;
        const isChecked = row.querySelector('.taskStatus').checked;
        const deadline = row.querySelector('.taskDeadline').textContent;
        todos.push({ taskName, isChecked, deadline });
      });
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  
    function addTodoRow(todo) {
      const row = todoTable.insertRow();
      const taskNameCell = row.insertCell(0);
      const taskStatusCell = row.insertCell(1);
      const taskDeadlineCell = row.insertCell(2);
      const taskActionCell = row.insertCell(3);
  
      taskNameCell.className = 'taskName';
      taskNameCell.textContent = todo.taskName;
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'taskStatus';
      checkbox.checked = todo.isChecked;
      checkbox.addEventListener('change', saveTodos);
      taskStatusCell.appendChild(checkbox);
  
      taskDeadlineCell.className = 'taskDeadline';
      taskDeadlineCell.textContent = todo.deadline;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '削除';
      deleteButton.addEventListener('click', () => {
        todoTable.deleteRow(row.rowIndex - 1);
        saveTodos();
      });
      taskActionCell.appendChild(deleteButton);
    }
  
    addButton.addEventListener('click', () => {
      const taskName = prompt('タスク名を入力してください:');
      const deadline = prompt('期限を入力してください:');
      if (taskName && deadline) {
        const todo = { taskName, isChecked: false, deadline };
        addTodoRow(todo);
        saveTodos();
      }
    });
  
    loadTodos();
  });
  