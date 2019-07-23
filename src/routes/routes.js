import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import LoProximo from 'src/pages/LoProximo.vue'
import ProximosPartidos from 'src/pages/ProximosPartidos.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import Typography from 'src/pages/Typography.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/lo-proximo'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/lo-proximo',
    children: [
      {
        path: 'lo-proximo',
        name: 'Lo Próximo',
        component: LoProximo
      },
      {
        path: 'proximos-partidos',
        name: 'Próximos Partidos',
        component: ProximosPartidos
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
