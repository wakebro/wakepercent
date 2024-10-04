// ** Icons Import
import { Home, Activity, ShoppingCart } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: '대시보드',
    icon: <Home />,
    children: [
      {
        id: 'analyticsDash',
        title: '내 소개',
        icon: <Activity />,
        navLink: '/dashboard/analytics'
      },
      {
        id: 'eCommerceDash',
        title: '사이트 소개',
        icon: <ShoppingCart />,
        navLink: '/dashboard/ecommerce'
      }
    ]
  }
]
