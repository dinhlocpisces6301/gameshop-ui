import config from '~/config';

export const storeNavItems = [
  {
    id: 1,
    title: 'Your Store',
    path: '/',
    subnav: [
      {
        id: 1,
        title: 'Home',
        path: '/',
      },
      {
        id: 2,
        title: 'Community Recommends',
        path: '/',
      },
      {
        id: 3,
        title: 'Recently Viewed',
        path: '/',
      },
    ],
  },
  {
    id: 2,
    title: 'New & Noteworthy',
    path: '/',
    subnav: [
      {
        id: 1,
        title: 'Top Sellers',
        path: '/',
      },
      {
        id: 2,
        title: 'New & Trending',
        path: '/',
      },
      {
        id: 3,
        title: 'Current Specials',
        path: '/',
      },
      {
        id: 4,
        title: 'Recently Updated',
        path: '/',
      },
      {
        id: 5,
        title: 'Popular Upcoming',
        path: '/',
      },
    ],
  },
  {
    id: 3,
    title: 'Categories',
    path: config.routes.category,
  },
  {
    id: 4,
    title: 'News',
    path: '/',
  },
];
