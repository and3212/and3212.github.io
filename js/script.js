// IIFE with jQuery Wrapper
(function($) {
  'use strict';


  /*
   *----------------------------------
   * Document Ready
   *----------------------------------
   */
  $(document).ready(function() {

    // full Scren Page active
  $('.th-fullpage').fullpage({
  		autoScrolling: false,
  		fitToSection: false
  	});

    // Owl Carousel Activation
    var owl = $('.th-sldier');
    owl.owlCarousel({
      navigation : true,
      singleItem : true,
      transitionStyle : 'fade',
      autoPlay:false,
      pagination:true
    });


    // mouse hover effect

    // Mixit Up
    $('#Container').mixItUp({
      animation: {
        duration: 1000
      }
    });

   /* Popup Video */
  $('#th-video').magnificPopup({
      items: [
        {
          src: 'video/circuitBoard.mp4',
          type: 'iframe' // this overrides default type
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image' // this is default type
  });

   /* Popup Image */
  $('.image-link').magnificPopup({
    type: 'image'
  });

    // DOM Content Load Event Actions;
  $( window ).load(function() {
    $('div.loading').remove();
    $('body').removeClass('loading');
  });

  // Revolution Slider Active
  jQuery('#tf_rev_slider').revolution({
    sliderType:'standard',
    sliderLayout:'auto',
    delay:9000,
    navigation: {
        arrows:{enable:true}
    },
    gridwidth:1230,
    gridheight:720
  }); 

  });// DOM Ready



}(jQuery)); // IIFE
