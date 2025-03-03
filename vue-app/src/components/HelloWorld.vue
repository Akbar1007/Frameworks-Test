<template>
	<body>
		<div class="header">
			<h1>Vue App</h1>
		</div>

		<div class="wrapper">
			<ul id="todos"></ul>

			<form>
				<input name="todo" type="text" />
				<input type="submit" value="Add Todo" />
			</form>
		</div>
	</body>
</template>

<script>
export default {
	name: 'HelloWorld',
	data: function () {
		return {
			todos: [],
			todoText: '',
		}
	},
	methods: {
		addTodo: function () {
			this.todos = [...this.todos, this.todoText]
			localStorage.setItem('todos', JSON.stringify(this.todos))
		},
	},
	mounted: function () {
		const existingTodos = localStorage.getItem('todos')
		this.todos = JSON.parse(existingTodos) || []
	},
}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	align-items: center;
	justify-content: center;
	height: 100vh;
	font-family: Arial, sans-serif;
}
.header {
	width: 100%;
	text-align: center;
	background-color: #f4f4f4;
	padding: 15px 0;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}
.wrapper {
	display: block;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 100px;
	width: 100%;
	max-width: 400px;
	text-align: center;
}
.center {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
ul {
	list-style-type: disc;
	padding-left: 20px;
}
form {
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
}
input[type='text'],
input[type='submit'] {
	padding: 10px;
	font-size: 16px;
	width: 100%;
	border-radius: 10px;
}
input[type='submit'] {
	background-color: #28a745;
	color: white;
	border: none;
	cursor: pointer;
}
input[type='submit']:hover {
	background-color: #218838;
}
</style>
