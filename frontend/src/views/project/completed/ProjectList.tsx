import { API_ABOUT_ME_PROJECTS } from "@constants/api"
import { ROUTE_PROJECT_LIST } from "@constants/route"
import { Project } from "@utility/typescript/aboutData"
import { getDatas } from "@utility/util/aboutData"
import { formatDatetimeYYYYMM } from "@utility/util/dataTime"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { Badge, Card, CardBody, CardSubtitle, CardTitle, Col, Row, Spinner } from "reactstrap"

const ProjectList = () => {
  const { t, i18n } = useTranslation()
  const [ data, setData ] = useState<Project[]>([])
  const navigate = useNavigate()

  async function callback (data?: Record<string, any>) {
    if (data !== null) {
      const result = data?.['result']
      await setData(result)
    }
  }

  useEffect(() => {
    const params = { lang: i18n.language }

    getDatas({
      API: API_ABOUT_ME_PROJECTS,
      params: params,
      callback: callback
    })
  }, [i18n.language])
  return (
    <div className="projects">
      {
        data === null || data.length === 0 ? <Spinner/>
        : data.map((d, idx) => {
          return (
            <Card key={d.id} style={{cursor: 'pointer'}} onClick={() => navigate(`${ROUTE_PROJECT_LIST}/${d.id}`)}>
              <CardBody>
                <CardTitle tag="h3">{d.name}</CardTitle>
                <CardSubtitle className="text-muted">
                {formatDatetimeYYYYMM(d.dateOfStart)} {d.dateOfEnd !== null && `~ ${formatDatetimeYYYYMM(d.dateOfEnd)}`}
                </CardSubtitle>
                <hr/>
                <Row>
                  <Col>
                    <Row><h4>{t('prj.description')}</h4></Row>
                    <Row>
                      <ul>
                        {
                          d.description.split('", "').map((sentance, idx) => {
                            return (
                              <li key={idx}>{ sentance.replaceAll('"', '') }</li>
                            )
                          })
                        }
                      </ul>
                    </Row>
                  </Col>
                  <Col xs='3'>
                    <Row><h4>{t('prj.skill')}</h4></Row>
                    <Row className=""><ul>
                      { 
                        d.skill.split(', ').map((skill, idx) => {
                          return <Badge className="mr-1" color="light-secondary" key={ idx }>{ skill.replaceAll('"', '') } </Badge>
                        })
                      }
                    </ul></Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>

          )
        })
      }
    </div>
  )
}

export default ProjectList