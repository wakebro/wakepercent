// ** Router Components
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutTag from "../layout/HorizontalLayout"
import { RouteArr } from "./routes"


// import LayoutWrapper from "@core/layouts/components/layout-wrapper"
import LayoutWrapper from "@layouts/components/layout-wrapper"
import { RoutesInfo } from "@core/typescript/layout"
import { Fragment } from "react/jsx-runtime"

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
            <Fragment>
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