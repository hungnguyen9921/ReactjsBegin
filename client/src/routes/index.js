import Cart from '../pages/cart/Cart';
import Profile from '../pages/profile/Profile';
import SingleProduct from '../components/Product/SingleProduct';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import LoginLayout from '../pages/login/LoginLayout';
const privateRoutes = [
      { path: '/login', component: Login, layout: LoginLayout },
      { path: '/', component: Home },
      { path: '/user/profile', component: Profile },
      { path: '/products/:id', component: SingleProduct },
      { path: '/cart', component: Cart },
      { path: '/cart/:id', component: Cart },
];

export { privateRoutes };
