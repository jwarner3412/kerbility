// BidVertiser variables
var dec_pid = 719128;
var dec_bid = 1784823;
// infolinks variables
var infolinks_pid = 2727670;
var infolinks_wsid = 0;

// 5 sec timout inserts ads after pageload for google results
(function () {
// // inserts ad css and any other non crucial stuff i can move
//   $('head').append($(document.createElement('link')).attr({
//     rel: 'stylesheet',
//     href: '/css/main.css'
//   }));

// rev hits scripts
  var revhitsSquare1 = $(document.createElement('script')).attr({
    src: '//clksite.com/adServe/banners?tid=113089_215589_0',
    type: 'text/javascript'
  })
  $('.revhits-square1').append(revhitsSquare1);

  var revhitsSquare2 = $(document.createElement('script')).attr({
    src: '//clksite.com/adServe/banners?tid=113089_215589_1',
    type: 'text/javascript'
  })
  $('.revhits-square2').append(revhitsSquare2);

  var revhitsSquare3 = $(document.createElement('script')).attr({
    src: '//clksite.com/adServe/banners?tid=113089_215589_4',
    type: 'text/javascript'
  })
  $('.revhits-square3').append(revhitsSquare3);

  var revhitsSquare4 = $(document.createElement('script')).attr({
    src: '//clksite.com/adServe/banners?tid=113089_215589_5',
    type: 'text/javascript'
  })
  $('.revhits-square4').append(revhitsSquare4);

  var revhitsFoot = $(document.createElement('script')).attr({
    src: '//clksite.com/adServe/banners?tid=113089_215589_2&type=footer&size=728x90',
    type: 'text/javascript'
  })
  $('body').append(revhitsFoot);

  var revhitsShadowBox = $(document.createElement('script')).attr({
    src: '//clksite.com/adServe/banners?tid=113089_215589_3&type=shadowbox&size=300x250',
    type: 'text/javascript'

  })
  $('body').append(revhitsShadowBox);


// non square ads
// infolinks
  var infolinks = $(document.createElement('script')).attr({
    src: '//resources.infolinks.com/js/infolinks_main.js',
    type: 'text/javascript'
  })
  $('body').append(infolinks);


// viglinks
  var vglnk = { key: '9c1c9c3af2b6bbade7ed3a0281ffae18' };
  (function(d, t) {
    var s = d.createElement(t); s.type = 'text/javascript'; s.async = true;
    s.src = '//cdn.viglink.com/api/vglnk.js';
    var r = d.getElementsByTagName(t)[0]; r.parentNode.insertBefore(s, r);
  }(document, 'script'));

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
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-76237224-1', 'auto');
  ga('send', 'pageview');
})();
