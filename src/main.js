import normalize from './normalize.css';
import style from './style.css';
import $ from 'jquery';
import routes from './routes.js';

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