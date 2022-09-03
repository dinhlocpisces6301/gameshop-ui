import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import NotFound from '~/pages/NotFound';
import Home from '~/pages/Home';
import Category from '~/pages/Category';
import Contact from '~/pages/Contact';
import Profile from '~/pages/Profile';
import Product from '~/pages/Product';
import Search from '~/pages/Search';
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';
import ForgetPassword from '~/pages/ForgetPassword';
import CartPage from '~/pages/CartPage';
import WishListPage from '~/pages/WishListPage';
import AboutPage from '~/pages/AboutPage';
import CheckoutPage from '~/pages/CheckoutPage';

// Public routes
const publicRoutes = [
  { path: config.routes.notFound, component: NotFound, layout: HeaderOnly },
  { path: config.routes.home, component: Home },
  { path: config.routes.categoryWithPagination, component: Category },
  { path: config.routes.categoryWithPaginationDefault, component: Category },
  { path: config.routes.categoryWithGenre, component: Category },
  { path: config.routes.category, component: Category },
  { path: config.routes.contact, component: Contact, layout: HeaderOnly },
  { path: config.routes.profile, component: Profile, layout: HeaderOnly },
  { path: config.routes.product, component: Product, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: HeaderOnly },
  { path: config.routes.login, component: Login, layout: HeaderOnly },
  { path: config.routes.signup, component: SignUp, layout: HeaderOnly },
  { path: config.routes.forgetPassword, component: ForgetPassword, layout: HeaderOnly },
  { path: config.routes.cart, component: CartPage, layout: HeaderOnly },
  { path: config.routes.wishlist, component: WishListPage, layout: HeaderOnly },
  { path: config.routes.about, component: AboutPage, layout: HeaderOnly },
  { path: config.routes.checkout, component: CheckoutPage, layout: HeaderOnly },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
