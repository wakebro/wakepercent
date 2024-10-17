import { RoutesInfo } from "@core/typescript/layout"
import DashboardRoutes from "./Dashboards"

// Merge Route
const RouteArr:RoutesInfo[] = [
  ...DashboardRoutes
]

export { RouteArr }