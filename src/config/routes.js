const routes = {
  notFound: '*',
  home: '/',
  category: '/category/:genre',
  product: '/product/:productID',
  contact: '/contact',
  profile: '/profile/:nickname',
  search: '/search',
  login: '/login',
  signup: '/register',
  forgetPassword: '/forgetpassword',
};

export default routes;
