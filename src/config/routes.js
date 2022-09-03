const routes = {
  notFound: '*',
  home: '/',
  categoryWithPagination: '/category/:genre&_page=:page',
  categoryWithPaginationDefault: '/category/:genre&_page=',
  categoryWithGenre: '/category/:genre',
  category: '/category',
  product: '/product/:productID',
  contact: '/contact',
  profile: '/profile/:nickname',
  search: '/search',
  login: '/login',
  signup: '/register',
  forgetPassword: '/forgetpassword',
  cart: '/cart',
  wishlist: '/wishlist',
  about: '/about',
  checkout: '/checkout',
};

export default routes;
