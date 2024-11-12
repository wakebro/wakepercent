import { CoreMenuFunProps, MenuItems } from "@core/typescript/layout"
import classNames from "classnames"
import { useTranslation } from "react-i18next"
import { NavLink, useLocation } from "react-router-dom"

const HorizontalNavMenuLink = ({menuData, setOpenDropdown}: MenuItems & CoreMenuFunProps ) => {
  const { t } = useTranslation()
  const location = useLocation()
  const reset = () => {
    setOpenDropdown([])
  }

  return (
    <li className={classNames('nav-item', {
      active: menuData?.navLink === location.pathname
    })} onClick={reset}>
      <NavLink
        className="d-flex align-items-center dropdown-item"
        to={menuData?.navLink as string}
      > {menuData?.icon}
        { t(`header.menubar.${menuData?.id}`) }
      </NavLink>
    </li>
  )
}

export default HorizontalNavMenuLink