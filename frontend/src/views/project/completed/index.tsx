import ProjectList from "@views/project/completed/ProjectList"
import { Col, Row } from "reactstrap"

const PrjCompleted = () => {
  return (
    <div id='prj-completed'>
      <Row style={{justifyContent:'center'}}>
        <Col xs='8'>
          <ProjectList/>
        </Col>
      </Row>
    </div>
  )
}

export default PrjCompleted