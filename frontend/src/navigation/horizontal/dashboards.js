// ** Icons Import
import { Home, Activity, ShoppingCart } from 'react-feather'

export default [
  {
    id: 'about',
    title: '소개',
    icon: <Home />,
    children: [
      {
        id: 'abouteMe',
        title: '내 소개',
        icon: <Activity />,
        navLink: '/dashboard/me'
      },
      {
        id: 'aboutSite',
        title: '사이트 소개',
        icon: <ShoppingCart />,
        navLink: '/dashboard/site'
      }
    ]
  }
]
