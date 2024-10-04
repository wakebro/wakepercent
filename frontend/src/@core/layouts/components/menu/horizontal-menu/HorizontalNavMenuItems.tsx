// ** Menu Components Imports
import { CoreMenuFunProps, MenuItems } from "@core/typescript/layout"
import HorizontalNavMenuGroup from "./HorizontalNavMenuGroup"
import HorizontalNavMenuLink from "./HorizontalNavMenuLink"

const HorizontalNavMenuItems = (props: MenuItems & CoreMenuFunProps) => {
  // ** Render Nav Items
  const RenderNavItems = props.menuDataArr?.map((item, idx) => {
    const TagName = item.children && HorizontalNavMenuGroup // : HorizontalNavMenuLink
    
    if(item.children) {
      return <HorizontalNavMenuGroup key={idx} menuData={item} {...props}/>
    }
    return <HorizontalNavMenuLink key={idx} menuData={item} {...props}/>
  })
  return (
    <>
      {RenderNavItems}
    </>
  )
}

export default HorizontalNavMenuItems