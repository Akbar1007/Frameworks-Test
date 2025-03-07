import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular To-Do App';
  todos: string[] = [];
  todoText = '';

  ngOnInit() {
    const existingTodos = localStorage.getItem('todos');
    this.todos = existingTodos ? JSON.parse(existingTodos) : [];
  }

  addTodo() {
    if (this.todoText.trim()) {
      this.todos.push(this.todoText.trim());
      localStorage.setItem('todos', JSON.stringify(this.todos));
      this.todoText = ''; // Clear input after adding
    }
  }
}
