// BidVertiser variables
var dec_pid = 719128;
var dec_bid = 1784823;

// 5 sec timout inserts ads after pageload for google results
(function () {
// // inserts ad css and any other non crucial stuff i can move
//   $('head').append($(document.createElement('link')).attr({
//     rel: 'stylesheet',
//     href: '/css/main.css'
//   }));

// constructor for ad infos
  var AdData = function(url, element, bool) {
    this.url = url;
    this.element = element;
    if (bool) {
      this.noGet = bool;
    }
  }

// dirty dirty
  renderAd = function(binder) {
    if (!binder) {
      var binder = this;
    }
// heheehehehe
    document.write = function(adContent) {
      binder.element.append(adContent);
    }

    document.writeIn = function(adContent) {
      binder.element.append(adContent);
    }

    if (!binder.noGet) {
      binder.element.append($(document.createElement('script')).attr({
        type: 'text/javascript',
        src: binder.url
      }));
    } else {
      $.getScript(binder.url);
    }
  }

// bidvert nonsense placeholder loader
  $('.bidvert-square1').append($(document.createElement('script')).attr({
    type: "text/javascript",
    src: "http://cdn.bidvertiser.com/bdvinj.js?pid=719128&bid=1784823",
  }));

  var bidvertRuntime1 = new AdData(
      'http://cdn.bidvertiser.com/bdvinj.js?pid=719128&bid=1784827',
      $('.bidvert-square1')
  );

  $('.bidvert-square2').append($(document.createElement('script')).attr({
    type: "text/javascript",
    src: "http://cdn.bidvertiser.com/bdvinj.js?pid=719128&bid=1784827",
  }));

  var bidvertRuntime2 = new AdData(
      'http://cdn.bidvertiser.com/bdvinj.js?pid=719128&bid=1784823',
      $('.bidvert-square2')
  );
// yllix script
  var yllixSquarePop = new AdData(
    'http://yx-ads6.com/layer.php?section=General&pub=532544&ga=g&show=1&fp',
    $('.ad-place2')
  );


// rev hits scripts
  var revhitsSquare1 = new AdData(
    '//clksite.com/adServe/banners?tid=113089_215589_0',
    $('.revhits-square1')
  )

  var revhitsSquare2 = new AdData(
    '//clksite.com/adServe/banners?tid=113089_215589_1',
    $('.revhits-square2')
  )


// puts scripts where they go
  var blockAdList = [];
  blockAdList.push(
    yllixSquarePop,
    bidvertRuntime1,
    revhitsSquare1,
    revhitsSquare2,
    bidvertRuntime2
  );

  for (var i = 0; i < blockAdList.length; i++) {
    renderAd(blockAdList[i]);
  }

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
