(function (e, a) {
  if (!a.__SV) {
    var b = window; try { var c; var l; var i; var j = b.location; var g = j.hash; c = function (a, b) { return (l = a.match(RegExp(b + '=([^&]*)'))) ? l[1] : null }; g && c(g, 'state') && (i = JSON.parse(decodeURIComponent(c(g, 'state'))), i.action === 'mpeditor' && (b.sessionStorage.setItem('_mpcehash', g), history.replaceState(i.desiredHash || '', e.title, j.pathname + j.search))) } catch (m) { } var k, h; window.mixpanel = a; a._i = []; a.init = function (b, c, f) {
      function e (b, a) {
        var c = a.split('.'); c.length == 2 && (b = b[c[0]], a = c[1]); b[a] = function () {
          b.push([a].concat(Array.prototype.slice.call(arguments,
            0)))
        }
      } var d = a; typeof f !== 'undefined' ? d = a[f] = [] : f = 'mixpanel'; d.people = d.people || []; d.toString = function (b) { var a = 'mixpanel'; f !== 'mixpanel' && (a += '.' + f); b || (a += ' (stub)'); return a }; d.people.toString = function () { return d.toString(1) + '.people (stub)' }; k = 'disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user'.split(' ')
      for (h = 0; h < k.length; h++)e(d, k[h]); a._i.push([b, c, f])
    }; a.__SV = 1.2; b = e.createElement('script'); b.type = 'text/javascript'; b.setAttribute('defer', ''); b.src = typeof MIXPANEL_CUSTOM_LIB_URL !== 'undefined' ? MIXPANEL_CUSTOM_LIB_URL : e.location.protocol === 'file:' && '//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js'.match(/^\/\//) ? 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js' : '//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js'; c = e.getElementsByTagName('script')[0]; c.parentNode.insertBefore(b, c)
  }
})(document, window.mixpanel || [])

export default mixpanel
