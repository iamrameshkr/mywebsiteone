+function(a){"use strict";a(function(){var b=function(){function c(){return modules&&modules.misc&&modules.misc.cookieTool?modules.misc.cookieTool.getItem("cartItemQuantity")-0:void 0}function d(a){a-=0,a>0?(g.addClass("not-empty"),g.attr("data-quantity",a),e(a)):(g.removeClass("not-empty"),g.attr("data-quantity",0),e(0))}function e(a){modules&&modules.misc&&modules.misc.cookieTool&&modules.misc.cookieTool.setItem("cartItemQuantity",a)}var f=a("header"),g=f.find(".icon-cart");return function(){d(c())}(),f.on("addtocart.oneplus",function(a){b.addItem()}),f.on("cartchange.oneplus",function(a,c){b.setCartQuantity(c)}),f.on("removefromcart.oneplus",function(a,c){b.removeItem(c)}),{AUTHOR:"Michael",VERSION:"1.0.0",LAST_MODIFIED:"2015-05-09",$element:f,addItems:function(a){for(var c=0;c<a.length;c++)b.addItem(a[c])},addItem:function(){g.addClass("not-empty");var a=g.attr("data-quantity")-0+1;g.attr("data-quantity",a)},setCartQuantity:d,removeItem:function(a){a-=0,d(a)}}}();window.modules=window.modules||{},window.modules.header=b})}(jQuery);