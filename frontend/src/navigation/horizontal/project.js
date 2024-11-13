// ** Icons Import
import {
  Box,
  Mail,
  User,
  Circle,
  Shield,
  Calendar,
  FileText,
  CheckSquare,
  ShoppingCart,
  MessageSquare
} from 'react-feather'

export default [
  {
    id: 'prjs',
    title: '프로젝트',
    icon: <Box />,
    children: [
      {
        id: 'prjCompleted',
        title: '진행 프로젝트',
        icon: <MessageSquare />,
        navLink: '/prj/list'
      }
      // {
      //   id: 'prjFeature',
      //   title: '기능',
      //   icon: <CheckSquare />,
      //   navLink: '/prj/feature'
      // }
    ]
  }
]