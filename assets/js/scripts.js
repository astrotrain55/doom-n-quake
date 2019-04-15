var elements = document.getElementsByClassName('game__item');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function(e) {
    var game = e.currentTarget.getAttribute('data-game');
    run(game);
  });
}

function run(game){
  alert(game);
}
