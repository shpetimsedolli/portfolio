(function ($, window, document) {
  "use strict";
  $(function () {
    //##Variables
    var $body = $("body"),
      $window = $(window),
      $doc = $(document),
      defaultEasing = [0.4, 0.0, 0.2, 1];
    //End Variables
    $doc.scroll(function () {
      if ($doc.scrollTop() > $(".first_banner").outerHeight()) {
        $(".main_header").addClass("is--sticky");
      } else {
        $(".main_header").removeClass("is--sticky");
      }
    });
  });
})(window.jQuery, window, document);
