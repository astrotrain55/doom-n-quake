function run(game){
  alert(game);
}

$(function(){
  $('.game').on('click', function(){
    var game = $(this).data('game');
    run(game);
  });
});
