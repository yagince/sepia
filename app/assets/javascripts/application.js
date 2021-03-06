// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.mousewheel.min
//= require twitter/bootstrap
//= require bootstrap-switch
//= require jquery.unveil.min
//= require underscore
//= require sepia-util.js
//= require user_search
//= require main
//= require album
//= require trunk8.min
//= require jquery.fancybox-1.3.4
//= require jquery.toast
//= require bootstrap-typeahead.min.js

_.templateSettings = {
    evaluate:    /\%\{=(.+?)\}/g,
    interpolate: /\%\{(.+?)\}/g,
    escape:      /\%\{-(.+?)\}/g
};
