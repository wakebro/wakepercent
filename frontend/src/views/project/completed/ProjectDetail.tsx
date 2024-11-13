import { API_ABOUT_ME_PROJECT } from "@constants/api"
import { ROUTE_PROJECT_LIST } from "@constants/route"
import { PrjDetail } from "@utility/typescript/aboutData"
import { getDatas } from "@utility/util/aboutData"
import { formatDatetimeYYYYMM } from "@utility/util/dataTime"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom"
import { Badge, Button, Card, CardBody, CardSubtitle, Col, Row, Spinner } from "reactstrap"

const ProjectDetail = () => {
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const [ data, setData ] = useState<PrjDetail>()

  const navigate = useNavigate()

  async function callback (data?: Record<string, any>) {
    if (data !== null) {
      const result = data?.['result']
      await setData(result)
    }
  }

  useEffect(() => {
    const params = { id: id, lang: i18n.language }

    getDatas({
      API: API_ABOUT_ME_PROJECT,
      params: params,
      callback: callback
    })
  }, [i18n.language, id])
  return (
    <div className="projects-detail">
      <Row style={{justifyContent:'center'}}>
        <Col xs='8'>
          <Col style={{display:'flex', justifyContent:'flex-end'}}>
            <Button color="primary" onClick={() => navigate(ROUTE_PROJECT_LIST)}>{t('component:main')}</Button>
          </Col>
          <br/>
          <Card >
            <CardBody>
              {
                data === null || data === undefined ? <Spinner/>
                :
                <>
                  <h1>{data?.name}</h1>
                  <hr/>
                  <CardSubtitle className="text-muted">
                    <Row>
                      <Col xs='12' md='6'>
                        <span>{t('prj.workPeriod')} | </span>
                        <span>{formatDatetimeYYYYMM(data?.dateOfStart)} {data?.dateOfEnd !== null && `~ ${formatDatetimeYYYYMM(data?.dateOfEnd)}`}</span>
                      </Col>
                      <Col xs='12' md='6'>
                        <span>{t('prj.skill')} | </span>
                        <span>
                          {
                            data?.skill.split(', ').map((skill, idx) => {
                              return <Badge className="mr-1" color="light-secondary" key={ idx }>{ skill.replaceAll('"', '') } </Badge>
                            })
                          }
                        </span>
                      </Col>
                    </Row>
                    <hr/>
                  </CardSubtitle>

                  <h4>{t('prj.description')}</h4>
                  <Col className='' style={{overflowX: 'scroll'}} dangerouslySetInnerHTML={{__html: data?.description.replaceAll('"', '')}}></Col>
                  
                  <br/>

                  <h4>{t('prj.responsibility')}</h4>
                  <div style={{whiteSpace:'pre-wrap'}}>{data?.workDetail}</div>
                </>
              }
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectDetail