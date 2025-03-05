import styles from './App.module.css'
import logo from './logo.svg'

function App() {
	return (
		<div class={styles.App}>
			<header class={styles.header}>
				<img src={logo} class={styles.logo} alt='logo' />
				<p>
					Hi 👋. Want to discover my other <code>projects</code>?
				</p>
				<a
					class={styles.link}
					href='https://github.com/Akbar1007'
					target='_blank'
					rel='noopener noreferrer'
				>
					My GitHub profile
				</a>
			</header>
		</div>
	)
}

export default App
