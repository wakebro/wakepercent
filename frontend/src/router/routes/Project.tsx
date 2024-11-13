import { RoutesInfo } from "@core/typescript/layout"
import { ROUTE_PROJECT_LIST } from "@constants/route"
import { lazy } from "react"


const ProjectRoutes:RoutesInfo[] = [
  {
    path: ROUTE_PROJECT_LIST,
    component: lazy(() => import('../../views/project/completed'))
  },
  {
    path: `${ROUTE_PROJECT_LIST}/:id`,
    component: lazy(() => import('../../views/project/completed/ProjectDetail'))
  },
  {
    path: '/prj/feature',
    component: lazy(() => import('../../views/project/feature'))
  }
]

export default ProjectRoutes