import { roulette } from './roulette';

export const gamePage = () => {
    console.log('hi')
    const rootElement = document.getElementById('root');
    const headerElement = document.createElement('header');
    headerElement.classList.add('header');
    console.log(headerElement)

    const gamesListElement = document.createElement('ul');
        gamesListElement.classList.add('gamesList');
    console.log(gamesListElement)

    const games = ['Poker', 'Blackjack', 'Roulette', 'Baccarat', 'Craps', 'Slots'];
    games.map(game => {
        const gameItemElement = document.createElement('li');
        gameItemElement.classList.add('gameItem');
        if(game === 'Roulette') gameItemElement.classList.add('rouletteGame');
        gameItemElement.textContent = game;
        console.log(gameItemElement)
        gamesListElement.append(gameItemElement);
    })

    headerElement.append(gamesListElement);
    rootElement.append(headerElement);
    roulette();
}