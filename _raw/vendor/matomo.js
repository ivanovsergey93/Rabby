var _paq = (window._paq = window._paq || []);
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function () {
  setTimeout(() => {
    chrome.storage.local.get('cid_v2').then(function (result) {
      var u = 'https://matomo.debank.com/';
      _paq.push(['setTrackerUrl', u + 'matomo.php']);
      _paq.push(['setSiteId', '2']);
      _paq.push(['setVisitorId', result.cid_v2]);

      var d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0];
      g.async = true;
      g.src = '/vendor/matomo.client.js';
      s.parentNode.insertBefore(g, s);
    });
  }, 500);
})();
