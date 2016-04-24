window.onload = function() {
  var mainScript = document.createElement('script');
  mainScript.setAttribute('type', 'text/javascript');
  mainScript.setAttribute('src', '/scripts/main-foot.js');
  console.log(mainScript);
  document.body.appendChild(mainScript);
}
