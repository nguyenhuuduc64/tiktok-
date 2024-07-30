import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
//các routes không cần đăng nhập vẫn vào đươcj như trang chủ,...
const publicRoutes = [
  //truyền layout vào thì lấy layout, nếu là null thì không lấy còn nếu là default thì trả về defaltLayout
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: null },
  { path: '/search', component: Search, layout: null },
];
//phải đăng nhập mới vào được như trang cá nhân ,..
const privateRoutes = [];

export { publicRoutes, privateRoutes };
