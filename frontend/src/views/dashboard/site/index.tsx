import { Col, Row } from "reactstrap"

import CardComposition from "@views/dashboard/site/CardComposition"
import CardWebUpdateLog from "@views/dashboard/site/CardWebUpdateLog"
import CardWelcom from "@views/dashboard/site/CardWelcom"

const SiteDashboard = () => {
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