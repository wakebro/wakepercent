// ** Third Party Components
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Fragment } from "react/jsx-runtime"
import { useDispatch } from 'react-redux'

// ** Reactstrap Imports
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap"
import { setLanguage } from '@redux/module/i18n'

interface LangInfo {
  [code: string]: string
}

const IntlDropdown = () => {
  // ** Hooks
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  
  const langObjArr:LangInfo[] = [
    { en: 'English'}, {ko: '한국어'}
  ]

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    dispatch(setLanguage(lang))
  }
  
  useEffect(() => {
    if (Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Seoul') {
      i18n.changeLanguage('ko')
      dispatch(setLanguage('ko'))
    } else {
      i18n.changeLanguage('en')
      dispatch(setLanguage('en'))
    }
  }, [])
  return(
    <>
      <UncontrolledDropdown tag='li' className="dropdown-language nav-item">
        <DropdownToggle className='nav-link' tag='a'>
          <span className="selected-language">{t('header.language')}</span>
        </DropdownToggle>
        <DropdownMenu className='mt-4' end>
          {
            langObjArr.map((langInfo, idx) => {
              return (
                <Fragment key={idx}>
                  {
                    Object.keys(langInfo).map((lang) => {
                      return(
                        <DropdownItem tag='a' key={lang} onClick={() => changeLanguage(lang)}>
                          <span className='ms-4'>{langInfo[lang]}</span>
                        </DropdownItem>
                      )
                    })
                  }
                </Fragment>
              )
            })
          }
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  )
}

export default IntlDropdown