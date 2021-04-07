import { Home, Circle } from 'react-feather'

export default [
  {
    header: 'Principal'
  },
  {

    id: 'dashboards',
    title: 'Dashboards',
    icon: <Home size={20} />,
    badge: 'light-warning',
    navLink: '/dashboard/analytics'
    
      
      // {
      //   id: 'eCommerceDash',
      //   title: 'eCommerce',
      //   icon: <Circle size={12} />,
      //   navLink: '/dashboard/ecommerce'
      // }
    
  }
]
