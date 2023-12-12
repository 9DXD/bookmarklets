javascript:(function(){
 var popup = window.open("", "_blank", "width=300,height=200");
 popup.document.write("<html><head><title>about:blank</title></head><body><h1>Bookmarklet Menu</h1></body></html>");
 /*popup.document.close();
 window.onblur = function() {
  popup.close();
 };*/
})();
