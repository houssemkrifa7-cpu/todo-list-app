// To-Do List App with Local Storage

class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.storageKey = 'todoList';
        
        this.elements = {
            input: document.getElementById('todoInput'),
            addBtn: document.getElementById('addBtn'),
            todoList: document.getElementById('todoList'),
            clearBtn: document.getElementById('clearBtn'),
            statsText: document.getElementById('statsText'),
            filterBtns: document.querySelectorAll('.filter-btn')
        };
        
        this.init();
    }

    init() {
        this.loadTodos();
        this.render();
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.elements.addBtn.addEventListener('click', () => this.addTodo());
        this.elements.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });
        this.elements.clearBtn.addEventListener('click', () => this.clearCompleted());
        
        this.elements.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });
    }

    addTodo() {
        const text = this.elements.input.value.trim();
        
        if (text === '') {
            alert('Please enter a task!');
            return;
        }

        if (text.length > 200) {
            alert('Task is too long! (max 200 characters)');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString()
        };

        this.todos.unshift(todo);
        this.saveTodos();
        this.elements.input.value = '';
        this.elements.input.focus();
        this.render();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveTodos();
        this.render();
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.render();
        }
    }

    clearCompleted() {
        const completedCount = this.todos.filter(t => t.completed).length;
        
        if (completedCount === 0) {
            alert('No completed tasks to clear!');
            return;
        }

        if (confirm(`Delete ${completedCount} completed task(s)?`)) {
            this.todos = this.todos.filter(todo => !todo.completed);
            this.saveTodos();
            this.render();
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        this.elements.filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        
        this.render();
    }

    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(todo => !todo.completed);
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            default:
                return this.todos;
        }
    }

    render() {
        this.renderTodoList();
        this.updateStats();
        this.updateClearButton();
    }

    renderTodoList() {
        const filteredTodos = this.getFilteredTodos();
        this.elements.todoList.innerHTML = '';

        if (filteredTodos.length === 0) {
            this.elements.todoList.innerHTML = `
                <div class="empty-state">
                    <p>${this.currentFilter === 'all' ? 'No tasks yet. Add one to get started!' : `No ${this.currentFilter} tasks.`}</p>
                </div>
            `;
            return;
        }

        filteredTodos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <input 
                    type="checkbox" 
                    class="todo-checkbox" 
                    ${todo.completed ? 'checked' : ''}
                    data-id="${todo.id}"
                >
                <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                <button class="delete-btn" data-id="${todo.id}">Delete</button>
            `;

            const checkbox = li.querySelector('.todo-checkbox');
            checkbox.addEventListener('change', () => this.toggleTodo(todo.id));

            const deleteBtn = li.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => this.deleteTodo(todo.id));

            this.elements.todoList.appendChild(li);
        });
    }

    updateStats() {
        const activeTodos = this.todos.filter(todo => !todo.completed).length;
        const totalTodos = this.todos.length;
        
        let statsText = '';
        if (activeTodos === 0) {
            statsText = totalTodos === 0 ? 'No tasks' : 'All tasks completed!';
        } else if (activeTodos === 1) {
            statsText = '1 item left';
        } else {
            statsText = `${activeTodos} items left`;
        }
        
        this.elements.statsText.textContent = statsText;
    }

    updateClearButton() {
        const hasCompleted = this.todos.some(todo => todo.completed);
        this.elements.clearBtn.disabled = !hasCompleted;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    saveTodos() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
        } catch (error) {
            console.error('Failed to save todos to local storage:', error);
        }
    }

    loadTodos() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (stored) {
                this.todos = JSON.parse(stored);
            }
        } catch (error) {
            console.error('Failed to load todos from local storage:', error);
            this.todos = [];
        }
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});