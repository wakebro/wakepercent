import React, { Fragment, ReactNode } from 'react'

// ** Reactstrap Imports
import { Navbar, NavItem } from "reactstrap";

// ** Custom Components
import NavbarComponent from './components/navbar'
import FooterComponent from './components/footer'
import MenuComponent from './components/menu/horizontal-menu'

// ** Configs
import themeConfig from '@configs/themeConfig'

// ** Third Party Components
import classNames from 'classnames';
import { Link } from 'react-router-dom';

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
    // console.log(props)
    // console.log(props.menuData)
    console.log('112!2!!!')
    
    return(
        <div className={classNames(
            `wrapper horizontal-layout horizontal-menu navbar-floating footer-static menu-expanded`
        )}
        style={{display:'flex', flexDirection:'column'}}>
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

                {/* header left Bookmark
                <div className='navbar-container d-flex content' style={{maxHeight:'60px'}}>
                    {navbar ? navbar : <NavbarComponent skin={skin} setSkin={setSkin} />}
                    <NavbarComponent/>
                </div> */}
            </Navbar>

            {/* 1st middlemenu */}
            <div className='horizontal-menu-wrapper'>
                <Navbar
                    tag='div'
                    expand='sm'
                    light
                    // dar=''
                    className={classNames(
                        'header-navbar navbar-horizontal navbar-shadow menu-border floating-nav container-xxl floating-nav navbar navbar-expand-sm navbar-light'
                    )}>
                    <MenuComponent menuDataArr={props.menuData}/>
                </Navbar>
            </div>

            <div className='app-content content overflow-hidden'>
                <div className='content-overlay'></div>
                <div className='header-navbar-shadow' />
                <div className='content-wrapper container-xxl p-0 animate__animated animate__fadeIn'>

                </div>
                {props.children}
            </div>

            <footer className='footer footer-light footer-static'>
                <FooterComponent/>
            </footer>
        </div>
    )
}

export default HorizontalLayout