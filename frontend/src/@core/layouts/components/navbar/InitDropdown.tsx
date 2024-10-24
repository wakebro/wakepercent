// ** Third Party Components
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

// ** Reactstrap Imports
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap"

const IntlDropdown = () => {
  // ** Hooks
  const { i18n } = useTranslation()

  console.log('???????')
  console.log(i18n.language)
  

  // ** Vars
  const langObj = {
    en: 'English',
    de: 'German',
    fr: 'French',
    pt: 'Portuguese'
  }

  // ** Function to switch Language
  // const handleLangUpdate = (e, lang:string) => {
  //   e.preventDefault()
  //   i18n.changeLanguage(lang)
  // }
  useEffect(() => {
    if (Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Seoul') {
      // i18n.changeLanguage('ko')
    } else {
      // i18n.changeLanguage('en')
    }
  }, [])
  return(
    <UncontrolledDropdown tag='li' className="dropdown-language nav-item">
      <DropdownToggle className='nav-link' tag='a' //outline color="primary"
      >
        <span className="selected-language">언어</span>
      </DropdownToggle>
      <DropdownMenu className='mt-4' end>
        <DropdownItem tag='a'>
          <span className='ms-4'>English</span>
        </DropdownItem>
        <DropdownItem tag='a'>
          <span className='ms-4'>한국어</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default IntlDropdown