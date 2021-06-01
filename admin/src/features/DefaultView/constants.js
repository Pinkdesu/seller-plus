import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';

export const NAV_ITEMS = [
  {
    primary: 'Пользователи',
    icon: <PeopleIcon />,
    path: '/users',
  },
  {
    primary: 'Товары',
    icon: null,
    path: '/products',
  },
  {
    primary: 'Заказы',
    icon: <ShoppingCartIcon />,
    path: '/orders',
  },
];
