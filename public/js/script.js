$(document).ready(function($) {
   'use strict';


  // Skrollr Â· Mobile NONE
  if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
      skrollr.init({
      beforerender: function(data) {
        return data.curTop > data.lastTop;
      }

      });
  }
  // Skrollr

});


$(window).load(function() {

  fixSizes();
  $(".loader").delay(500).fadeOut('slow');
  $("body").css("overflow", "auto");
  $(".home-title").removeClass("hide");
  $(".menu-icon").removeClass("hide");

});


$(window).resize(function() {
  fixSizes();
});

function fixSizes() {

  var windowHeight = $(window).height();
  var windowWidth = $(window).width();

  $("#home").css('height', windowHeight);
  $(".home-title").each(function() {
    $(this).css('padding-top', ($(this).parent().height() - $(this).height()) / 3);
  });
  $(".work-item-inside-content").each(function() {
    $(this).css('margin-top', ($(this).parent().height() - $(this).height()) / 2);
  });
}
