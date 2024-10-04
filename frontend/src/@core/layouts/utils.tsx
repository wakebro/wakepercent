import { MenuItem } from "@core/typescript/layout";

export const hasActiveChild = (menuData:MenuItem, currentUrl:String) => {
  const { children } = menuData

  if (!children) {
    return false
  }

  for (const child of children) {
    
    if (child.children) {
      if (hasActiveChild(child, currentUrl)) {
        return true
      }
    }

    // Check if the child has a link and is active
    if (child && child.navLink && currentUrl && (child.navLink === currentUrl || currentUrl.includes(child.navLink))) {
      return true
    }
  }

  return false
}