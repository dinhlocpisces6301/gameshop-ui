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

// Public routes
const publicRoutes = [
  { path: config.routes.notFound, component: NotFound, layout: HeaderOnly },
  { path: config.routes.home, component: Home },
  { path: config.routes.category, component: Category },
  { path: config.routes.contact, component: Contact, layout: HeaderOnly },
  { path: config.routes.profile, component: Profile, layout: HeaderOnly },
  { path: config.routes.product, component: Product, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: HeaderOnly },
  { path: config.routes.login, component: Login, layout: HeaderOnly },
  { path: config.routes.signup, component: SignUp, layout: HeaderOnly },
  { path: config.routes.forgetPassword, component: ForgetPassword, layout: HeaderOnly },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
