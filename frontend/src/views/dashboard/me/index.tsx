import CardExperience from "@views/dashboard/me/CardExperience"
import CardIntroduce from "@views/dashboard/me/CardIntroduce"
import CardIProfile from "@views/dashboard/me/CardIProfile"
import { Card, Col, Row } from "reactstrap"

const MeDashboard = () => {

  return (
    <Card id='dashboard-me'>
      <Row style={{justifyContent:'center'}}>
        <Col xs='10'>
          <CardIProfile/>
        </Col>
      </Row>
      <hr/>
      <Row style={{justifyContent:'center'}}>
        <Col xs='10'>
          <CardIntroduce/>
        </Col>
      </Row>
      <hr/>
      <Row style={{justifyContent:'center'}}>
        <Col xs='10'>
          <CardExperience/>
        </Col>
      </Row>
      <hr/>
    </Card>
  )
}

export default MeDashboard