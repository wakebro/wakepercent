// ** Icons Import
import { Globe, Home, Smile } from 'react-feather'

export default [
  {
    id: 'about',
    title: '소개',
    icon: <Home />,
    children: [
      {
        id: 'abouteMe',
        title: '내 소개',
        icon: <Smile />,
        navLink: '/dashboard/me'
      },
      {
        id: 'aboutSite',
        title: '사이트 소개',
        icon: <Globe />,
        navLink: '/dashboard/site'
      }
    ]
  }
]
