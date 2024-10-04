import { CoreMenuFunProps, MenuItem, MenuItems } from "@core/typescript/layout";
import classNames from "classnames";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import HorizontalNavMenuItems from "./HorizontalNavMenuItems";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { hasActiveChild } from "@layouts/utils"

const HorizontalNavMenuGroup = ({
  menuData,
  groupActive, setGroupActive,
  openDropdown, setOpenDropdown, 
  onMouseEnter, onMouseLeave, submenu
}: MenuItems & CoreMenuFunProps) => {

  // ** Hooks
  const location = useLocation()

  // ** URL Var
  const currentURL = useLocation().pathname

  useEffect(() => {
    
    if (hasActiveChild(menuData as MenuItem, currentURL)) {
      if (!groupActive?.includes(menuData?.id as String)) groupActive?.push(menuData?.id as String)
    } else {
      const index = groupActive?.indexOf(menuData?.id as String)
      if (index > -1) groupActive.splice(index, 1)
    }
    setGroupActive([...groupActive])
  }, [location])

  return (
    <Dropdown
      tag='li'
      toggle={() => null}
      isOpen={openDropdown?.includes(menuData?.id as string)}
      onMouseEnter={() => onMouseEnter(menuData?.id as string)}
      onMouseLeave={() => onMouseLeave(menuData?.id as string)}
      className={classNames({
        'nav-item': submenu === false,
        'dropdown-submenu': submenu === true,
        'sidebar-group-active active': groupActive.includes(menuData?.id as string)
      })}
    >
      <DropdownToggle
        to='/'
        tag='a'
        onClick={e => e.preventDefault()}
        className={classNames('dropdown-toggle d-flex align-items-center', {
          'dropdown-item': submenu === true,
          'nav-link': submenu === false
        })}
      >
        {menuData?.icon}
        <span>{menuData?.title}</span>
      </DropdownToggle>
      <DropdownMenu tag='ul' className={classNames({ 'first-level': submenu === false })}>
        <HorizontalNavMenuItems
          submenu={true}
          menuDataArr={menuData?.children}
          groupActive={groupActive}
          setGroupActive={setGroupActive}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </DropdownMenu>
    </Dropdown>
  )
}

export default HorizontalNavMenuGroup