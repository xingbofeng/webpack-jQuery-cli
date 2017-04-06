import normalize from './normalize.css';
import style from './style.css';
import $ from 'jquery';
import routes from './routes.js';

// pageWidth为设计图的宽度，一般为640px或750px
const pageWidth = 640;

function mapRoutesToPage(routes) {
  const path = window.location.pathname;
  let i = 0;
  while (i < routes.length) {
    if (routes[i].path === path) {
      return routes[i].components;
    }
    i++;
  }
  return '<h1>404 Not Found</h1>';
}

// 进行路由匹配
$(document).ready(function() {
  $('#container').html(mapRoutesToPage(routes));
});
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= pageWidth) {
        docEl.style.fontSize = '100px';
      } else {
        docEl.style.fontSize = 100 * (clientWidth / pageWidth) + 'px';
      }
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  if (window.localStorage.youdaonsj) {
    $(window).scrollTop(parseInt(window.localStorage.youdaonsj, 10));
  }
  var vendor = 'daxuelaile_';

  function init() {
    bindVendors();
  }

  var getParameter = function(name) {
    var r = new RegExp(`(\\?|#|&)${name}=([^&#]*)(&|#|$)`),
      m = location.href.match(r);
    return decodeURIComponent(!m ? '' : m[2]);
  };

  //追加vendor
  function transferLink(link) {
    if (link.indexOf('vendor') === -1) {
      if (link.indexOf('?') === -1) {
        link += `?vendor=${vendor}`;
      } else {
        link += `&vendor=${vendor}`;
      }
    }
    return link;
  }


  function bindVendors() {
    vendor = getParameter('vendor');
    var all = $('a');
    all.each(function(inx, item) {
      var $a = $(item);
      $a.attr('href', transferLink($a.attr('href')));
    });
  }
  init();
})(document, window);

window.onunload = function() {
  window.localStorage.youdaonsj = $(window).scrollTop();
};