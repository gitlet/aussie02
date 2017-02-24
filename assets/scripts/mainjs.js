$(document).ready(function() {
  $('body header').click(function() {
    $('body .menu').slideDown('fast');
    // $('body #closer').slideDown();

    $('body .menu #closer').click(function() {
      $('body .menu').slideUp();
    });
  });

  // services html
  $('body .wrapper .services-list > li#web-dsgn').click(function() {
    $('body .wrapper .services-list > li#web-dsgn > .inner-list').slideToggle();
  });

  $('body .wrapper .services-list > li#web-dev').click(function() {
    $('body .wrapper .services-list > li#web-dev > .inner-list').slideToggle();
  });

  $('body .wrapper .services-list > li#gr-dsgn').click(function() {
    $('body .wrapper .services-list > li#gr-dsgn > .inner-list').slideToggle();
  });

  $('body .wrapper .services-list > li#soft-dev').click(function() {
    $('body .wrapper .services-list > li#soft-dev > .inner-list').slideToggle();
  });

  $('body .wrapper .services-list > li#mob-apps').click(function() {
    $('body .wrapper .services-list > li#mob-apps > .inner-list').slideToggle();
  });

  $('body .wrapper .services-list > li#pentest').click(function() {
    $('body .wrapper .services-list > li#pentest > .inner-list').slideToggle();
  });

  $('body .wrapper .services-list > li#cont-wr').click(function() {
    $('body .wrapper .services-list > li#cont-wr > .inner-list').slideToggle();
  });

  $('body .wrapper .services-list > li#soc-med').click(function() {
    $('body .wrapper .services-list > li#soc-med > .inner-list').slideToggle();
  });

  $('body .wrapper .services-list > li#fine-arts').click(function() {
    $('body .wrapper .services-list > li#fine-arts > .inner-list').slideToggle();
  });


});
