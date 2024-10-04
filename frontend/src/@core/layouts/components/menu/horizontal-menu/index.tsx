// ** Horizontal Menu Components
import { useEffect, useState } from 'react'
import { MenuItems } from '@core/typescript/layout'
import HorizontalNavMenuItems from './HorizontalNavMenuItems'

// const Index = (props:CoreLayout) => {
const Index = ({menuDataArr}:MenuItems) => {
  // ** States
  // const [activeItem, setActiveItem] = useState(null)
  const [groupActive, setGroupActive] = useState<String[]>([])
  // const [openDropdown, setOpenDropdown] = useState<string[]>(['id-dashboard'])
  const [openDropdown, setOpenDropdown] = useState<String[]>([])

  // ** On mouse enter push the ID to openDropdown array
  const onMouseEnter = (id: String):void => {
    setOpenDropdown(prevArr => [...prevArr, String(id)]);
  }

  // ** On mouse leave remove the ID to openDropdown array
  const onMouseLeave = (id:String) => {
    setOpenDropdown(prevArr => prevArr.filter(item => item !== id));
  }

  return (
    <div className="navbar-container main-menu-content">
      <ul className='nav navbar-nav' id='main-menu-navigation'>
        <HorizontalNavMenuItems
          submenu={false}
          menuDataArr={menuDataArr}
          groupActive={groupActive}
          setGroupActive={setGroupActive}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </ul>
    </div>
  )
}

export default Index