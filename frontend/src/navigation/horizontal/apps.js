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
    id: 'apps',
    title: '프로젝트',
    icon: <Box />,
    children: [
      {
        id: 'email',
        title: '경력',
        icon: <Mail />,
        navLink: '/apps/email'
      },
      {
        id: 'chat',
        title: '프로젝트',
        icon: <MessageSquare />,
        navLink: '/apps/chat'
      },
      {
        id: 'todo',
        title: '기능',
        icon: <CheckSquare />,
        navLink: '/apps/todo'
      },
      {
        id: 'calendar',
        title: 'Calendar',
        icon: <Calendar />,
        navLink: '/apps/calendar'
      },
      {
        id: 'invoiceApp',
        title: 'Invoice',
        icon: <FileText />,
        children: [
          {
            id: 'invoiceList',
            title: 'List',
            icon: <Circle />,
            navLink: '/apps/invoice/list'
          },
          {
            id: 'invoicePreview',
            title: 'Preview',
            icon: <Circle />,
            navLink: '/apps/invoice/preview'
          },
          {
            id: 'invoiceEdit',
            title: 'Edit',
            icon: <Circle />,
            navLink: '/apps/invoice/edit'
          },
          {
            id: 'invoiceAdd',
            title: 'Add',
            icon: <Circle />,
            navLink: '/apps/invoice/add'
          }
        ]
      },
      {
        id: 'roles-permissions',
        title: 'Roles & Permissions',
        icon: <Shield size={20} />,
        children: [
          {
            id: 'roles',
            title: 'Roles',
            icon: <Circle size={12} />,
            navLink: '/apps/roles'
          },
          {
            id: 'permissions',
            title: 'Permissions',
            icon: <Circle size={12} />,
            navLink: '/apps/permissions'
          }
        ]
      },
      {
        id: 'eCommerce',
        title: 'eCommerce',
        icon: <ShoppingCart />,
        children: [
          {
            id: 'shop',
            title: 'Shop',
            icon: <Circle />,
            navLink: '/apps/ecommerce/shop'
          },
          {
            id: 'detail',
            title: 'Details',
            icon: <Circle />,
            navLink: '/apps/ecommerce/product-detail'
          },
          {
            id: 'wishList',
            title: 'Wish List',
            icon: <Circle />,
            navLink: '/apps/ecommerce/wishlist'
          },
          {
            id: 'checkout',
            title: 'Checkout',
            icon: <Circle />,
            navLink: '/apps/ecommerce/checkout'
          }
        ]
      },
      {
        id: 'users',
        title: 'User',
        icon: <User />,
        children: [
          {
            id: 'list',
            title: 'List',
            icon: <Circle />,
            navLink: '/apps/user/list'
          },
          {
            id: 'view',
            title: 'View',
            icon: <Circle />,
            navLink: '/apps/user/view'
          }
        ]
      }
    ]
  }
]
