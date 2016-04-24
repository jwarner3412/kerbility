window.fbAsyncInit = function() {
  FB.init({
    appId      : '1748071388763685',
    xfbml      : true,
    version    : 'v2.6'
  });
};

$(setTimeout((function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk')), 2500));
