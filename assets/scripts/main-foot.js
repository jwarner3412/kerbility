'use strict';

// // BidVertiser variables
// var dec_pid = 719128;
// var dec_bid = 1784823;
// // infolinks variables
// var infolinks_pid = 2727670;
// var infolinks_wsid = 0;
// // viglinks key
// var vglnk = { key: '9c1c9c3af2b6bbade7ed3a0281ffae18' };

// 5 sec timout inserts ads after pageload for google results
(function () {
// // inserts ad css and any other non crucial stuff i can move
//   $('head').append($(document.createElement('link')).attr({
//     rel: 'stylesheet',
//     href: '/css/main.css'
//   }));
// facebook init
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1748071388763685',
      xfbml      : true,
      version    : 'v2.6'
    });
  };

  // facebook comments
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');

  // google analytics
  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1; a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-76237224-1', 'auto');
  ga('send', 'pageview');

// // select is the jquery selector where the ad goes, url is script src
//   var adList = [
//     {select: '.revhits-square1', url: '//clksite.com/adServe/banners?tid=113089_215589_0'},
//     {select: '.revhits-square2', url: '//clksite.com/adServe/banners?tid=113089_215589_1'},
//     {select: '.revhits-square3', url: '//clksite.com/adServe/banners?tid=113089_215589_4'},
//     {select: '.revhits-square4', url: '//clksite.com/adServe/banners?tid=113089_215589_5'},
//     {select: 'body', url: '//resources.infolinks.com/js/infolinks_main.js',},
//     {select: 'body', url: '//clksite.com/adServe/banners?tid=113089_215589_2&type=footer&size=728x90',},
//     {select: 'body', url: '//clksite.com/adServe/banners?tid=113089_215589_3&type=shadowbox&size=300x250'}
//   ];

//   function adInject(obj) {
//     $(obj.select).append($(document.createElement('script'))
//       .attr({src: obj.url, type: 'text/javascript'})
//     )
//   }

//   adList.forEach(adInject);


// // viglinks
//   (function(d, t) {
//     var s = d.createElement(t); s.type = 'text/javascript'; s.async = true;
//     s.src = '//cdn.viglink.com/api/vglnk.js';
//     var r = d.getElementsByTagName(t)[0]; r.parentNode.insertBefore(s, r);
//   }(document, 'script'));
// })();
