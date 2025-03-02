// import React from 'react'
// import './App.scss'

// const App = () => {
// 	return (
// 		<div className='app'>
// 			<div className='header'>
// 				<h1>React App</h1>
// 				<h3>Vite, TypeScript, and Sass</h3>
// 			</div>
// 			<Header />
// 		</div>
// 	)
// }

// const Header = () => {
// 	return (
// 		<div className='wrapper'>
// 			<ul id='todos'></ul>
// 			<form>
// 				<input name='todo' type='text' />
// 				<input type='submit' value='Add Todo' />
// 			</form>
// 		</div>
// 	)
// }

// export default App

import { useEffect, useRef, useState } from 'react'
import '../styles/App.scss'

function App() {
	const [todos, setTodos] = useState([])
	const todoText = useRef()

	useEffect(() => {
		const existingTodos = localStorage.getItem('todos')
		setTodos(existingTodos ? JSON.parse(existingTodos) : [])
	}, [])

	function addTodo(event) {
		event.preventDefault()
		const next = [...todos, todoText.current.value]
		setTodos(next)
		localStorage.setItem('todos', JSON.stringify(next))
	}

	return (
		<div className='App'>
			<div className='header'>
				<h1>React App</h1>
				<h3>Using Sass and Vite</h3>
			</div>
			<ul>
				{todos.map(todo => (
					<li key={todo}>{todo}</li>
				))}
			</ul>

			<form onSubmit={addTodo}>
				<input
					type='text'
					placeholder='What needs to be done?'
					ref={todoText}
				/>
				<input type='submit' value='Add Todo' />
			</form>
		</div>
	)
}

export default App
