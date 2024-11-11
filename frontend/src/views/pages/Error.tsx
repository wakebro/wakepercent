import themeConfig from '@configs/themeConfig'
import { RootState } from '@redux/store'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { Button } from "reactstrap"

const Error = () => {
  const language = useSelector((state: RootState) => state.i18n.language)

  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log(i18n.language);
  }, [])
  return(
    <div className='misc-wrapper'>
      <a href='/' className='brand-logo' style={{display:'flex', margin:'30px'}}>
        <span>
            <img src={themeConfig.app.appLogoImage} alt='logo' style={{maxHeight:'30px'}}/>
        </span>
        <h2 className='brand-text text-primary ms-1'>{themeConfig.app.appName}</h2>
      </a>

      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <h2 className='mb-1'>{t('error.title')}</h2>
          <p className='mb-2'>{t('error.content')}</p>
          <Button tag={Link} to='/' color='primary' className='btn-sm-block mb-2'>
            {t('error.button')}
          </Button>
          {/* <img className='img-fluid' src={source} alt='Not authorized page' /> */}
        </div>
      </div>
    </div>
  )
}

export default Error