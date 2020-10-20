import { createElement } from '../ui-framework';

export default function Header() {
    const header = createElement('header', '', document.body);
    const headline = createElement('h1', 'Dashboard', header);
}
