import { roulette } from './roulette';

export const gamePage = () => {
    const rootElement = document.getElementById('root');
    const header = document.createElement('header');
    header.classList.add('header');
    rootElement.append(header);
    roulette();
}