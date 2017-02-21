$(document).ready(function() {
  $('body header').click(function() {
    $('body .menu').slideDown('fast');
    // $('body #closer').slideDown();

    $('body .menu #closer').click(function() {
      $('body .menu').slideUp();
    });
  });
});
