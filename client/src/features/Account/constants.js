import user from '~/assets/images/account/user.png';
import home from '~/assets/images/account/home.png';
import padlock from '~/assets/images/account/padlock.png';
import shoppingBag from '~/assets/images/account/shopping-bag.png';
import exit from '~/assets/images/account/exit.png';

export const ACCOUNT_NAV = [
  {
    text: 'account.personalInformation',
    image: user,
    path: '/account',
  },
  {
    text: 'account.myOrders',
    image: shoppingBag,
    path: '/account/orders',
  },
  {
    text: 'account.addressBook',
    image: home,
    path: '/account/address',
  },
  {
    text: 'account.changePassword',
    image: padlock,
    path: '/account/change-password',
  },
  {
    text: 'account.logOut',
    image: exit,
    path: '/account/log-out',
  },
];

export const PAGE_HEADERS = {
  account: {
    title: 'account.personalInformation',
    image: user,
    text: 'account.header.youCanUpdate',
  },
  'change-password': {
    title: 'account.changePassword',
    image: padlock,
    text: 'account.header.youCanChange',
  },
  orders: {
    title: 'account.myOrders',
    image: shoppingBag,
  },
  order: {
    title: 'account.order.orderInformation',
    text: 'account.order.thankYou',
  },
  //  {
  //    text: 'account.myApplications',
  //    image: clipboard,
  //    path: '/account/applications',
  //  },
  //  {
  //    text: 'account.addressBook',
  //    image: home,
  //    path: '/account/address',
  //  },
  //  {
  //    text: 'account.changePassword',
  //    image: padlock,
  //    path: '/account/change-password',
  //  },
  //  {
  //    text: 'account.logOut',
  //    image: exit,
  //    path: '/account/log-out',
  //  },
};

export const DISPLAYED_COUNT = 3;

export const ORDER_STATUSES = {
  1: {
    status: 'account.orders.status1',
    dateTitle: 'account.orders.creatingDate',
  },
  2: {
    status: 'account.orders.status2',
    dateTitle: 'account.orders.sendingDate',
  },
  3: {
    status: 'account.orders.status3',
    dateTitle: 'account.orders.deliveryDate',
  },
};
