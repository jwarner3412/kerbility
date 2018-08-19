'use strict';
window.onload = function() {
  var timeoutID = window.setTimeout(function() {
    var mainScript = document.createElement('script');
    mainScript.setAttribute('type', 'text/javascript');
    mainScript.setAttribute('src', 'assets/scripts/main-foot.js');
    document.body.appendChild(mainScript);
  }, 5000)
}
