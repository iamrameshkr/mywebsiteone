+function(a){"use strict";!function(){var b=999,c=1;return a(document).on("click",".js-num-add",function(c){c.preventDefault(),c.stopPropagation();var d=a(this),e=d.siblings(".js-num");e.data().oldValue=e.val()-0;var f=e.data().oldValue+1;return b=e.data().max||b,e.val(f>b?parseInt(b):parseInt(f)),e.trigger("change"),!1}),a(document).on("click",".js-num-minus",function(){var b=a(this),d=b.siblings(".js-num");d.data().oldValue=d.val()-0;var e=d.data().oldValue-1;return c=d.data().min||1,d.val(c>=e?parseInt(c):parseInt(e)),d.trigger("change"),!1}),a(document).on("keydown",".js-num-control .js-num",function(a){var b=a||window.event;b.keyCode<58||b.keyCode>95&&b.keyCode<106||100===b.keyCode||(b.preventDefault(),b.stopPropagation())}),a(document).on("focus",".js-num-control .js-num",function(b){var c=a(this);c.data.oldValue=c.val()}),{setMaxValue:function(a){b=a}}}()}(jQuery);