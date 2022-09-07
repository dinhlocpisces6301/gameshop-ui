const routes = {
  notFound: '*',
  home: '/',
  product: '/product/:productId',
  contact: '/contact',
  profile: '/profile/:nickname',
  login: '/login',
  signup: '/register',
  forgetPassword: '/forgetpassword',
  cart: '/cart',
  wishlist: '/wishlist',
  about: '/about',
  checkout: '/checkout',
  category: '/category',
  categoryWithGenre: '/category/:genre',
  categoryWithPaginationDefault: '/category/:genre/page=',
  categoryWithPagination: '/category/:genre/page=:page',
  search: '/search/q=:keyword',
  searchWithPaginationDefault: '/search/q=:keyword/page=',
  searchWithPagination: '/search/q=:keyword/page=:page',
};

export default routes;
