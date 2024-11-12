import { RoutesInfo } from "@core/typescript/layout"
import { lazy } from "react"


const ProjectRoutes:RoutesInfo[] = [
  {
    path: '/prj/list',
    component: lazy(() => import('../../views/project/completed'))
  },
  {
    path: '/prj/feature',
    component: lazy(() => import('../../views/project/feature'))
  }
]

export default ProjectRoutes