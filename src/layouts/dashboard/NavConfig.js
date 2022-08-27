// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'books',
    path: '/dashboard/books',
    icon: getIcon('ant-design:read-outlined'),
  },
  {
    title: 'orders',
    path: '/dashboard/orders',
    icon: getIcon('icon-park-outline:order'),
  },
  {
    title: 'pending request',
    path: '/dashboard/pending-request',
    icon: getIcon('ic:baseline-pending-actions'),
  },
];

export default navConfig;
