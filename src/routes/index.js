// Layouts
// import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Logout from '~/pages/Logout';
import Upload from '~/pages/Upload';
import Download from '~/pages/Download';

// Public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: Login, layout: null },
  { path: '/logout', component: Logout },
  { path: '/upload', component: Upload },
  { path: '/download', component: Download },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
