function run(game){
  alert(game);
}

$(function(){
  $('.game__item').on('click', function(){
    var game = $(this).data('game__item');
    run(game);
  });
});
