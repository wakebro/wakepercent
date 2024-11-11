import { Col, Row } from "reactstrap"

import { RootState } from "@redux/store"
import CardComposition from "@views/dashboard/site/CardComposition"
import CardWebUpdateLog from "@views/dashboard/site/CardWebUpdateLog"
import CardWelcom from "@views/dashboard/site/CardWelcom"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

const SiteDashboard = () => {
  const i18nRedux = useSelector((state: RootState) => state.i18n)
  const { i18n } = useTranslation()

  useEffect(() => {
    if (i18nRedux.language !== i18n.language) {
      i18n.changeLanguage(i18nRedux.language)
    }
  }, [])
  useEffect(() => {
    if (i18nRedux.language !== i18n.language) {
      i18n.changeLanguage(i18nRedux.language)
    }
  }, [i18n.language])
  return (
    <div id='dashboard-site'>
      <Row style={{justifyContent:'center'}}>
        <Col xs='8'>
          <CardWelcom/>
        </Col>
      </Row>
      <Row style={{justifyContent:'center'}}>
        <Col xs='8'>
          <CardComposition />
        </Col>
      </Row>
      <Row style={{justifyContent:'center'}}>
        <Col xs='8'>
          <CardWebUpdateLog/>
        </Col>
      </Row>
    </div>
  )
}

export default SiteDashboard