import { RoutesInfo } from "@core/typescript/layout"
import DashboardRoutes from "./Dashboards"
import ProjectRoutes from "./Project"

// Merge Route
const RouteArr:RoutesInfo[] = [
  ...DashboardRoutes,
  ...ProjectRoutes
]

export { RouteArr }