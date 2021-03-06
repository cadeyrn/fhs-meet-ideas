// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require autocomplete-rails
//= require jquery.noty
//= require timepicker
//= require jquery.fancybox
// require_tree .

$(document).ready(function() {
  $.timepicker.regional['de'] = {
    timeOnlyTitle: 'Uhrzeit auswählen',
    timeText: 'Zeit',
    hourText: 'Stunde',
    minuteText: 'Minute',
    secondText: 'Sekunde',
    currentText: 'Jetzt',
    closeText: 'Auswählen',
    dateFormat: 'dd.mm.yy,',
    ampm: false
  };
  $.timepicker.setDefaults($.timepicker.regional['de']);
  $('.timepicker').timepicker();

  $(".fancybox").fancybox({
    openEffect	: 'none',
    closeEffect	: 'none'
  });
});

// thanks to railscasts 197
function add_fields(link, association, content) {
  var new_id = new Date().getTime();
  var regexp = new RegExp("new_" + association, "g")
  $(link).parent().before(content.replace(regexp, new_id));

  if(association === 'appointments') {
    $('.timepicker').timepicker();
  }
}

function remove_fields(link) {
  $(link).prev("input[type=hidden]").val("1");
  $(link).closest(".fields").hide();
}