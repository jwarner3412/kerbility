window.onload = function() {
  var timeoutID = window.setTimeout(function() {
    var mainScript = document.createElement('script');
    mainScript.setAttribute('type', 'text/javascript');
    mainScript.setAttribute('src', '/scripts/main-foot.js');
    console.log(mainScript);
    document.body.appendChild(mainScript);
  }, 5000)
}
