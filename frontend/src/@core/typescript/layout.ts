import { ReactElement } from "react"

export interface MenuItem {
  id: string,
  title: string,
  icon: ReactElement
  navLink?: string,
  children?: MenuItem[]
}

export interface MenuItems {
  menuData?: MenuItem
  menuDataArr?: MenuItem[]
}

export interface CoreMenuFunProps {
  submenu: boolean
  groupActive: String[]
  setGroupActive: React.Dispatch<React.SetStateAction<String[]>>
  openDropdown?: String[]
  setOpenDropdown: React.Dispatch<React.SetStateAction<String[]>>
  onMouseEnter: (id:String) => void
  onMouseLeave: (id:String) => void
}