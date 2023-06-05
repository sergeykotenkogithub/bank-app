import { getTitle } from '@/config/seo.config'

/**
 * Create new BaseScreen instance
 * @param {Object} options - The options for the BaseScreen
 * @param {string} options.title - The title for the screen
 */
export class BaseScreen {
	constructor({ title }) {
		document.title = getTitle(title)
	}

	/**
	 * @returns {HTMLElement}
	 */
	render() {
		throw new Error('Render method must be implemented in the child class')
	}
}
