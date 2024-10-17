// ** Router Components
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutTag from "../layout/HorizontalLayout"
import { RouteArr } from "./routes"


import Hello from "@views/Hello"
import { Fragment } from "react/jsx-runtime"
import { RoutesInfo } from "@core/typescript/layout"

const Router = () => {
    // ** Return Filtered Array of Routes & Paths
    const LayoutRoutesAndPaths = () => {
        const LayoutRoutes:RoutesInfo[] = []
        const LayoutPaths:String[] = []

        if (RouteArr) {
            RouteArr.filter(route => {
                LayoutRoutes.push(route)
                LayoutPaths.push(route.path)
                
                // ** Checks if Route layout or Default layout matches current layout
                // if (route.layout === layout || (route.layout === undefined && DefaultLayout === layout)) {
                // LayoutRoutes.push(route)
                // LayoutPaths.push(route.path)
                // }
            })
        }

        return { LayoutRoutes, LayoutPaths }
    }

    const ResolveRoutes = () => {
        const testList = ['hello', 'test']
        // child 불러오는 순서 간략화 > 완료
        // lazy component 불러오는 방법 공부 > 완료
        // 모바일 화면시 메뉴 위치 > 해제
        // 한/영 위치
        const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths()
        
        return(
            <Fragment>
                {
                    LayoutRoutes.map((route, idx) => {
                        return (
                            <Route key={idx} path={route.path} element={<route.component/>}/>
                        )
                    })
                }
                <Route path="*" element={<div className="err">error</div>}/>
            </Fragment>
        )
    }
    return (
        <BrowserRouter>
            <LayoutTag test='test' ex='ex'>
                <Routes>
                    {ResolveRoutes()}
                </Routes>
            </LayoutTag>
        </BrowserRouter>
    )
    
}

export default Router