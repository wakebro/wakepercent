// ** Router Components
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutTag from "../layout/HorizontalLayout"


import Hello from "@views/Hello"
import { Fragment } from "react/jsx-runtime"

const Router = () => {

    const ResolveRoutes = () => {
        const testList = ['hello', 'test']
        return(
            <Fragment>
                {
                    testList.map((path, idx) => {
                        return(
                            <Route key={idx} path={`/${path}`} element={<div className={path}>{`${path}`}</div>}/>
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