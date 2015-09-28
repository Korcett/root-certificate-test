// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.

function isRetina() {
  var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
            (min--moz-device-pixel-ratio: 1.5),\
            (-o-min-device-pixel-ratio: 3/2),\
            (min-resolution: 1.5dppx)";

  if (window.devicePixelRatio > 1)
    return true;

  if (window.matchMedia && window.matchMedia(mediaQuery).matches)
    return true;

  return false;
};


function retina() {

  if (!isRetina())
    return;

  $("img.2x").map(function(i, image) {

    var path = $(image).attr("src");

    path = path.replace(".png", "@2x.png");
    path = path.replace(".jpg", "@2x.jpg");

    $(image).attr("src", path);
  });
};

$(document).ready(retina);

$(document).ready(function(){
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });

  var OSName="Unknown OS";
  if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
  if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
  if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
  if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

  if (OSName === "Windows") {
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $('ul.tabs li.windows').addClass('current');
    $('#windows').addClass('current');
  } else if (OSName === "Linux") {
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $('ul.tabs li.linux').addClass('current');
    $('#linux').addClass('current');
  } else {
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $('ul.tabs li.osx').addClass('current');
    $('#osx').addClass('current');
  }
});
