javascript:(function(){
 var popup = window.open("", "_blank", "width=300,height=200");
 popup.document.write("<html><head><title>Blank Page</title></head><body><h1>This is a blank page</h1></body></html>");
 /*popup.document.close();
 window.onblur = function() {
  popup.close();
 };*/
})();
