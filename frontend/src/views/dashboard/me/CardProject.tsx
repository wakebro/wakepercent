import { API_ABOUT_ME_PROJECTS } from "@constants/api"
import { formatDatetimeYYYYMM } from "@utility/util/dataTime"
import { getDatas } from "@utility/util/aboutData"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Badge, Col, Row, Spinner } from "reactstrap"
interface Project {
  name: string;
  description: string;
  dateOfStart: string;
  dateOfEnd: string;
  client: string;
  company: string;
  work: string;
  skill: string;
}

const CardProject = () => {
  const { t, i18n } = useTranslation()
  const [ data, setData ] = useState<Project[]>([])

  async function callback (data?: Record<string, any>) {
    if (data !== null) {
      const result = data?.['result']
      console.log(result)
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
      <Row>
        <Col sm='12' md='3'><h2 className="text-md-center-lo-left">PROJECTS</h2></Col>
        <Col sm='12' md='9' />
      </Row>
      {
        data == null || data.length === 0? <Spinner/>
        : data.map((d, idx) => {
          return (
            <Row key={idx}>
              <Col className="text-md-right-lo-center" sm='12' md='3'>
                <span style={{color:'gray', fontSize:'3ex'}}>
                  {formatDatetimeYYYYMM(d.dateOfStart)} {d.dateOfEnd !== null && `~ ${formatDatetimeYYYYMM(d.dateOfEnd)}`}
                </span>
              </Col>
              <Col sm='12' md='9'>
                <Row><h1>{d.name}</h1></Row>
                <Row>
                  <Col sx='6'>{`${t('about.company')} : ${d.company}`}</Col>
                  <Col sx='6'>{`${t('about.client')} : ${d.client}`}</Col>
                </Row>
                <hr/>
                <Row>
                  <ul>
                  { 
                    d.skill.split(', ').map((skill, idx) => {
                      return <Badge className="mr-1" color="light-secondary" key={ idx }>{ skill.replaceAll('"', '') } </Badge>
                    })
                  }
                  </ul>
                </Row>
                <Row>
                  <ul>{
                    d.work.split('", "').map((sentence, idx) => {
                      return <li key={ idx }>{ sentence.replaceAll('"', '') }</li>
                    })}
                  </ul>
                </Row>
                <br/>
              </Col>
            </Row>
          )
        })
      }
    </div>
  )
}

export default CardProject