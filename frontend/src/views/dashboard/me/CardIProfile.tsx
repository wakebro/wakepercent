import { API_ABOUT_PROFILE_IMG } from "@constants/resource"
import { contectList } from "@views/dashboard/me/contectList"
import { useTranslation } from "react-i18next"
import { Col, Row } from "reactstrap"

const CardIProfile = () => {
  const { t } = useTranslation()
  return (
    <div className="mt-5">
      <Row>
        <Col sm='12' md='4'>
          <div className="pb-3 text-md-right text-center">
            <img style={{width:'100%'}} src={API_ABOUT_PROFILE_IMG} alt="profile"/>
          </div>
        </Col>
        <Col sm='12' md='8'>
            <Row><Col className="text-md-left-lo-center"><h1>{t('about.meName')}</h1></Col></Row>
            <Row>
              <Col className="pt-3">
                {
                  contectList.map((contect, idx) => {
                    const Tag = idx === 0 ? 'span' : 'a'
                    return (
                      <Row key={contect.id} className="pb-2">
                        <Col className="text-center" xs='1' style={{alignContent:'center'}}>{contect.icon}</Col>
                        <Col className="text-left">
                          <Tag href={contect.address} 
                            rel="noopener"
                            target='_blank'
                            style={{fontSize:'20px', color:'#787878'}}
                            >
                            {contect.address}
                          </Tag>
                        </Col>
                      </Row>
                    )
                  })
                }
              </Col>
            </Row>
        </Col>
      </Row>
    </div>
  )
}

export default CardIProfile