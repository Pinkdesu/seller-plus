import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Dashboard from '@material-ui/icons/Dashboard';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import GavelIcon from '@material-ui/icons/Gavel';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
//import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

export const NAV_ITEMS = [
  {
    primary: 'Отчёты',
    icon: <Dashboard />,
    path: '/',
  },
  //  {
  //    primary: 'Панель',
  //    icon: <AssignmentIndIcon  />,
  //    path: '/',
  //  },
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
    primary: 'Разрешения',
    icon: <GavelIcon />,
    path: '/permissions',
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
    primary: 'Оборудование/Товары',
    icon: <ListAltIcon />,
    path: '/products',
  },
  {
    primary: 'Договоры',
    icon: <RecentActorsIcon />,
    path: '/contracts',
  },
  {
    primary: 'Пользователи',
    icon: <PeopleIcon />,
    path: '/users',
  },
];
