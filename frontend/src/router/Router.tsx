// ** Router Components
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import LayoutTag from "../layout/HorizontalLayout"
import { RouteArr } from "./routes"

import { RoutesInfo } from "@core/typescript/layout"
import LayoutWrapper from "@layouts/components/layout-wrapper"
import Error from "@views/pages/Error"

const Router = () => {
    // ** Return Filtered Array of Routes & Paths
    const LayoutRoutesAndPaths = () => {
        const LayoutRoutes:RoutesInfo[] = []
        const LayoutPaths:String[] = []

        if (RouteArr) {
            RouteArr.filter(route => {
                LayoutRoutes.push(route)
                LayoutPaths.push(route.path)
            })
        }

        return { LayoutRoutes, LayoutPaths }
    }

    const ResolveRoutes = () => {
        const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths()
        return(
            <>
                {
                    LayoutRoutes.map((route, idx) => {
                        return (
                            <Route key={idx} path={route.path} element={
                                <LayoutWrapper>
                                    <route.component/>
                                </LayoutWrapper>
                            }/>
                        )
                    })
                }
            </>
        )
    }

    function Layout() {
        return (
            <LayoutTag>
                {/* Outlet을 사용해 자식 Route를 렌더링 */}
                <Outlet />
            </LayoutTag>
        );
    }
    return (
        <BrowserRouter>
            <Routes>
                {/* "/" 경로로 접근 시 "/home"으로 리디렉션 */}
                <Route path="/" element={<Navigate to="/dashboard/site" replace />} />

                {/* 유효한 경로에 대해서만 Layout 적용 */}
                <Route element={<Layout />}>
                    {ResolveRoutes()}
                </Route>

                {/* 잘못된 URL 접근 시 독립적으로 렌더링될 NotFoundPage */}
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
    
}

export default Router