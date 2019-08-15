import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import LoProximo from 'src/pages/LoProximo.vue'
import ProximosPartidos from 'src/pages/ProximosPartidos.vue'
import SobreNosotros from 'src/pages/SobreNosotros.vue'
import Chat from 'src/pages/Chat.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/proximos-partidos'
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
        path: 'chat',
        name: 'Chat',
        component: Chat
      },
      {
        path: 'sobre-nosotros',
        name: 'Sobre Nosotros',
        component: SobreNosotros
      },
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
