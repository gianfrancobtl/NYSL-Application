import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import UltimasNoticias from 'src/pages/UltimasNoticias.vue'
import ProximosPartidos from 'src/pages/ProximosPartidos.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/UltimasNoticias'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/UltimasNoticias',
    children: [
      {
        path: 'ultimas-noticias',
        name: 'Ultimas Noticias',
        component: UltimasNoticias
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
        path: 'icons',
        name: 'Icons',
        component: Icons
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
