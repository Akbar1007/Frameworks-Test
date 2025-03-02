const form = document.querySelector('form')
const input = document.querySelector("[name='todo']")
const todoList = document.getElementById('todos')

const existingTodos = JSON.parse(localStorage.getItem('todos')) || []

const todoData = []

existingTodos.forEach(todo => {
	addTodo(todo)
})

function addTodo(todoText) {
	todoData.push(todoText)
	const li = document.createElement('li')
	li.innerHTML = todoText
	todoList.appendChild(li)
	localStorage.setItem('todos', JSON.stringify(todoData))
	input.value = ''
}

form.onsubmit = event => {
	event.preventDefault()
	addTodo(input.value)
}
