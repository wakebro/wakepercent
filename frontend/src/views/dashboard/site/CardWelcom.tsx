import { Card, CardBody, CardText } from "reactstrap"

const CardWelcom = () => {

  return (
    <Card>
      <CardBody>
        <div className="text-center">
          <h1 className="mb-1 text-gray">Welcome to Wakepercent!</h1>
            <CardText>이 사이트는 포트폴리오용 웹사이트 입니다.</CardText>
            <CardText>제가 배운 내용과 진행한 프로젝트를 업데이트하는 목적으로 만들었습니다.</CardText>
        </div>
      </CardBody>
    </Card>
  )
}

export default CardWelcom