import normalize from './normalize.css';
import style from './style.css';
import $ from 'jquery';
import routes from './routes.js';

// 进行路由匹配
$(document).ready(function() {
  const path = window.location.pathname;
  routes.map(v => {
    if (v.path === path) {
      $('body').html(v.components);
    }
  });
});