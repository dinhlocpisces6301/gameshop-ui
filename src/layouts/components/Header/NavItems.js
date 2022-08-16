import config from '~/config';
export const navItems = [
  {
    id: 1,
    title: 'Store',
    path: config.routes.home,
    subnav: [
      {
        id: 1,
        title: 'Best Sellers',
        path: config.routes.home,
      },
      {
        id: 2,
        title: 'Lastest',
        path: config.routes.home,
      },
      {
        id: 3,
        title: 'News',
        path: config.routes.home,
      },
      {
        id: 4,
        title: 'Wish List',
        path: config.routes.home,
      },
    ],
  },
  {
    id: 2,
    title: 'Community',
    path: config.routes.home,
    subnav: [
      {
        id: 1,
        title: 'Home',
        path: config.routes.home,
      },
      {
        id: 2,
        title: 'Discussions',
        path: config.routes.home,
      },
    ],
  },
  {
    id: 3,
    title: 'About',
    path: config.routes.home,
  },
  {
    id: 4,
    title: 'Contact',
    path: config.routes.contact,
  },
];

// Call Api
const User = {
  id: 1,
  nickname: 'dinhlocpisces',
};

export const ActionMenuItems = [
  {
    id: 1,
    title: 'View Profile',
    path: `/profile/${User.nickname}`,
  },
  // {
  //   id: 2,
  //   title: 'Account Details',
  //   path: config.routes.home,
  // },
  {
    id: 3,
    title: 'Logout',
    path: config.routes.home,
  },
];
