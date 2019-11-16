const games = document.querySelectorAll('.js-game');
const names = {
  DOOM: 'The Ultimate Doom',
  DOOM2: 'Doom II: Hell on Earth',
};

games.forEach((game) => {
  game.addEventListener('click', (e) => {
    const name = e.currentTarget.getAttribute('data-game');
    run(name);
  });
});

function run(game) {
  alert(names[game]);
}
