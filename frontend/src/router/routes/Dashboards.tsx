import { RoutesInfo } from "@core/typescript/layout"
import { lazy } from "react"


const DashboardRoutes:RoutesInfo[] = [
  {
    path: '/dashboard/site',
    component: lazy(() => import('../../views/dashboard/site'))
  },
  {
    path: '/dashboard/me',
    component: lazy(() => import('../../views/dashboard/me'))
  }
]

export default DashboardRoutes