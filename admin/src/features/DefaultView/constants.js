import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Dashboard from '@material-ui/icons/Dashboard';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';

export const NAV_ITEMS = [
  {
    primary: 'Панель',
    icon: <Dashboard />,
    path: '/',
  },
  {
    primary: 'Клиенты',
    icon: <PeopleIcon />,
    path: '/clients',
  },
  {
    primary: 'Заявки',
    icon: <AllInboxIcon />,
    path: '/applications',
  },
  {
    primary: 'Акты',
    icon: <InsertDriveFileIcon />,
    path: '/acts',
  },
  {
    primary: 'Проекты',
    icon: <AssistantPhotoIcon />,
    path: '/projects',
  },
  {
    primary: 'Заказы',
    icon: <ShoppingCartIcon />,
    path: '/orders',
  },
  {
    primary: 'Пользователи',
    icon: <PeopleIcon />,
    path: '/users',
  },
  {
    primary: 'Товары',
    icon: <ListAltIcon />,
    path: '/products',
  },
];
