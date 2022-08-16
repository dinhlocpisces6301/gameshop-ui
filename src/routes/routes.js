import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Category from '~/pages/Category';
import Contact from '~/pages/Contact';
import Profile from '~/pages/Profile';
import Product from '~/pages/Product';
import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.category, component: Category },
  { path: config.routes.contact, component: Contact, layout: HeaderOnly },
  { path: config.routes.profile, component: Profile, layout: HeaderOnly },
  { path: config.routes.product, component: Product, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
