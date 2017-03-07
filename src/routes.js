import Header from './components/Header/index.js';
import Main from './components/Main/index.js';
import Footer from './components/Footer/index.js';
// 匹配路由时一定要注意先后顺序，他们会是同辈元素
export default [{
  'path': '/',
  'components': Header + Main + Footer
}, {
  'path': '/Main',
  'components': Main
}, {
  'path': '/Footer',
  'components': Footer
}, {
  'path': '/Header',
  'components': Header	
}];