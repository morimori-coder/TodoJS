document.addEventListener('DOMContentLoaded', () => {
    const todoTable = document.getElementById('todoTable').getElementsByTagName('tbody')[0];
    const addButton = document.getElementById('addButton');
  
  /**
   * localStorage から TODO リストを読み込み、各項目をテーブルに追加します。
   *
   * @function loadTodos
   */
    function loadTodos() {
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      todos.forEach(todo => addTodoRow(todo));
    }
  
    /**
     * localStorage に TODO リストを保存します。
     * 
     * @function saveTodos
     */
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
  
    /**
     * 指定された TODO アイテムの情報を元に、新しいテーブルの行を追加します。
     * 
     * @param {Object} todo - TODO アイテムのオブジェクト
     * @param {string} todo.taskName - タスク名
     * @param {boolean} todo.isChecked - タスクの実施状態(完了済みかどうか)
     * @param {string} todo.deadline - タスクの期限
     * 
     * @function addTodoRow
     */
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
  
    /**
     *「追加」ボタンがクリックされた際にタスク名と期限をユーザーに入力させ、新しい TODO アイテムを追加します。 
     */
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
  