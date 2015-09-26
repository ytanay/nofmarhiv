/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    $('[data-toggle="tooltip"]').tooltip()
    $('.carousel').carousel();
    $('.go-contact').click(function(){
      $('.modal.in').removeClass('fade').one('hide.bs.modal', function(){
      setTimeout(function(){
        location.href = '#contact';
      }, 0);
    }).modal('hide').addClass('fade');
    });

    $('body').on('click', '.units-modal', function(e){
      $target = $(e.target);
      if($target.hasClass('row') || $target.hasClass('modal-content'))
        $('.modal.in').modal('hide');
    })
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

