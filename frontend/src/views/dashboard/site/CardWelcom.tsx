import  { API_ABOUT_SITE } from '@constants/api'
import axios from 'axios'
import { getDatas } from "@utility/util/aboutData"
import { useEffect, useState } from "react"
import { Card, CardBody, CardText } from "reactstrap"

interface DataType {
  id: number;
  name: string;
}

const CardWelcom = () => {
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    const params = { 
      userId: 1213, 
      detail: 'fullxxx'
    }

    getDatas({
      API: API_ABOUT_SITE, 
      params: params, 
      setState: setData
    })
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <Card>
      <CardBody>
        <div className="text-center">
          <h1 className="mb-1 text-gray">Welcome to Wakepercent!</h1>
            {/* <CardText>이 사이트는 포트폴리오용 웹사이트 입니다.</CardText> */}
            {/* <CardText>제가 배운 내용과 진행한 프로젝트를 업데이트하는 목적으로 만들었습니다.</CardText> */}
            <CardText>이 사이트는 제가 진행한 다양한 프로젝트와 경험을 소개하기 위해 제작되었습니다.</CardText>
            <CardText>저의 기술력과 개발 철학을 엿볼 수 있는 공간으로, </CardText>
            <CardText>방문하시는 모든 분들께 유익한 정보와 영감을 드릴 수 있기를 바랍니다.</CardText>
        </div>
      </CardBody>
    </Card>
  )
}

export default CardWelcom