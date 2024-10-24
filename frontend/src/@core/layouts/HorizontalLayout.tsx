import React from 'react'

// ** Reactstrap Imports
import { Navbar, NavItem } from "reactstrap"

// ** Custom Components
import NavbarComponet from './components/navbar'
import FooterComponent from './components/footer'
import MenuComponent from './components/menu/horizontal-menu'

// ** Configs
import themeConfig from '@configs/themeConfig'

// ** Third Party Components
import classNames from 'classnames'
import { Link } from 'react-router-dom'

// ** Styles
import '@styles/base/core/menu/menu-types/horizontal-menu.scss'

interface TestLayoutProps {
    children: React.ReactNode;
    [key: string]: any; // 기타 추가적인 props 허용
}

// const HorizontalLayout: React.FC<{ children?: React.ReactNode}> = ({ children }) => {
// function HorizontalLayout<T>(props :T) {
// function HorizontalLayout(props: {menuData: any, children: ReactNode}) {
function HorizontalLayout(props: TestLayoutProps) {
    return(
        <div className={classNames(
            `wrapper horizontal-layout horizontal-menu navbar-floating footer-static menu-expanded`)}>
            <Navbar
                expand='lg'
                container={false}
                style={{minHeight:'45px'}}
                className={classNames(
                    'header-navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center'
                )}>
                <div className='navbar-header d-xl-block' style={{minHeight:'20px'}}>
                    <ul className='nav navbar-nav'>
                        <NavItem>
                            <Link to='/' className='navbar-brand'>
                                <span className='brand-logo'>
                                    <img src={themeConfig.app.appLogoImage} alt='logo'/>
                                </span>
                                <h2 className='brand-text mb-0'>{themeConfig.app.appName}</h2>
                            </Link>
                        </NavItem>
                    </ul>
                </div>

                {/* header Bookmark */}
                <div className='navbar-container d-flex content' style={{maxHeight:'60px'}}>
                    {/* {navbar ? navbar : <NavbarComponent skin={skin} setSkin={setSkin} />} */}
                    <NavbarComponet/>
                </div>
            </Navbar>

            {/* 1st middlemenu */}
            <div className='horizontal-menu-wrapper'>
                <Navbar
                    tag='div'
                    expand='sm'
                    light
                    style={{maxWidth:'none', marginTop:'0px'}} // 추후 삭제 필요, menu-types > horizontal-menu.scss Initially menu & content width for md and down screen 주석 해제 
                    className={classNames(
                        'header-navbar navbar-horizontal navbar-shadow menu-border floating-nav container-xxl floating-nav navbar navbar-expand-sm navbar-light'
                    )}>
                    <MenuComponent menuDataArr={props.menuData}/>
                </Navbar>
            </div>

            {props.children}

            <footer className='footer footer-light footer-static'>
                <FooterComponent/>
            </footer>
        </div>
    )
}

export default HorizontalLayout