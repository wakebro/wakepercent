import { API_ABOUT_ME_EXPERIENCE } from "@constants/api"
import { getDatas } from "@utility/util/aboutData"
import { formatDatetimeYYYYMM } from "@utility/util/dataTime"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Badge, Col, Row, Spinner } from "reactstrap"

interface Experience {
  company: string;
  title: string;
  work: string;
  skill: string;
  dateJoin: string;
  dateQuit: string;
}

const CardExperience = () => {
  const { i18n } = useTranslation()
  const [data, setData] = useState<Experience[]>([])

  async function callback (data?: Record<string, any>) {
    if (data !== null) {
      const result = data?.['result']
      await setData(result)
    }
  }

  useEffect(() => {
    const params = {
      lang: i18n.language,
    }

    getDatas({
      API: API_ABOUT_ME_EXPERIENCE,
      params: params,
      callback: callback
    })
  }, [i18n.language])
  return (
    <div className="experiences">
      <Row>
        <Col sm='12' md='3'>
            <h2 className="text-md-center-lo-left">EXPERIENCE</h2>
        </Col>

        <Col sm='12' md='9' />
      </Row>
      {
        data == null || data.length === 0? <Spinner/>
        : data.map((d, idx) => {
          return (
            <Row key={idx}>
              <Col className="text-md-right-lo-center" sm='12' md='3'>
                  <span style={{color:'gray', fontSize:'3ex'}}>{formatDatetimeYYYYMM(d.dateJoin)} {d.dateQuit !== null && `~ ${formatDatetimeYYYYMM(d.dateQuit)}`}</span>
              </Col>
              <Col sm='12' md='9'>
                <Row><h1>{d.company}</h1></Row>
                <Row><h3>{d.title}</h3></Row>
                <Row>
                  <ul>{
                    d.work.split('", "').map((sentence, idx) => {
                      return <li key={ idx }>{ sentence.replace('"', '') }</li>
                    })}
                    <li>Skill Keywords</li>
                    { 
                      d.skill.split(', ').map((skill, idx) => {
                        return <Badge className="mr-1" color="light-secondary" key={ idx }>{ skill } </Badge>
                      })
                    }
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

export default CardExperience