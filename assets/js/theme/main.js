
$( document ).ready(function() {
  var $head = $( '#header' );
  $( '.ha-waypoint' ).each( function(i) {
    var $el = $( this ),
      animClassDown = $el.data( 'animateDown' ),
      animClassUp = $el.data( 'animateUp' );

    $el.waypoint( function( direction ) {
      if( direction === 'down' && animClassDown ) {
        $head.attr('class', 'header ' + animClassDown);
      }
      else if( direction === 'up' && animClassUp ){
        $head.attr('class', 'header ' + animClassUp);
      }
    });
    var pathname = window.location.pathname; 
    if ( pathname == "/") {
      $("body").addClass("home");
    }


    console.log("hello?");
  });


 console.log('hello?');

  function openMenu() {
    $('.m-menu-default').hide();
    $('.m-menu-open-trigger').addClass("menu-open");
    $('.m-menu-open-trigger').show();
    $('.menu').addClass('menu--open');
<<<<<<< HEAD
    $('.background-overlay').addClass('active');

  }
  function closeMenu() {
=======
  }
  function closeMenu() {
    console.log('cool?');
>>>>>>> 50948d834c0d11e3750c7e2b1a3bf5d6173ae7bd
    $('.m-menu-default').show();
    $('.m-menu-open-trigger').removeClass("menu-open");
    $('.m-menu-open-trigger').hide();
    $('.menu').removeClass('menu--open');
<<<<<<< HEAD
    
=======
>>>>>>> 50948d834c0d11e3750c7e2b1a3bf5d6173ae7bd
  }
  $('.m-menu-open-trigger').on('click', function() {
    closeMenu();
  });  
  $('.m-menu-default').on('click', function() {
    openMenu();
  });

  $('.nav-link').on('click', function() {
    setTimeout(function() {
      closeMenu();
    },100);
    
  });

  $('.menu-trigger').on('click', function() {
    $('body,html').toggleClass('m-active');
    $('.main-container').toggleClass('m-open');
<<<<<<< HEAD
    $('.background-overlay').toggleClass('active');
=======
>>>>>>> 50948d834c0d11e3750c7e2b1a3bf5d6173ae7bd
  }); 

});