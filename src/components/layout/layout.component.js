export class Layout {
	constructor({ router, children }) {
		this.router = router
		this.children = children
	}

	render() {
		const headerHTML = `
			<header>
				<nav>
					<a href="/">Home</a>
					<a href="/auth">Auth</a>
				</nav>
				Header
			</header>
		`

		return `
			${headerHTML}
			<main>
				${this.children}
			</main>
		`
	}
}
