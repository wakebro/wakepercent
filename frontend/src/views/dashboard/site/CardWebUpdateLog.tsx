import { API_ABOUT_SITE_UPDATE_LOG } from "@constants/api"
import { formatDatetimeYYYYMMDD } from "@utility/util/dataTime"
import { getDatas } from "@utility/util/aboutData"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Card, CardBody, CardTitle, Spinner } from "reactstrap"

interface LogData {
  title: string;
  content: string;
  createDate: string;
}

const CardWebUpdateLog = () => {
  const { t, i18n } = useTranslation()
  const [data, setData] = useState<LogData[]>([])

  async function callback (data?: Record<string, any>) {
    if (data !== null) {
      const result = data?.['result']
      await setData(result)
    }
  }

  useEffect(() => {
    const params = { lang: i18n.language }

    getDatas({
      API: API_ABOUT_SITE_UPDATE_LOG,
      params: params,
      callback: callback
    })
  }, [i18n.language])
  return (
    <Card>
      <CardBody>
        <CardTitle>{t(`about.webUpdateLog`)}</CardTitle>
        <CardBody>
          <ul className="timeline">
            {
              data == null || data.length === 0 ? <Spinner/>
              : data.map((log, idx) => {
                return (
                  <li key={idx} className="timeline-item">
                    <span className="timeline-point timeline-point-indicator"/>
                    <div className="timeline-event">
                      <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                        <h4>{ log?.title }</h4>
                        <div className="timeline-event-time">{formatDatetimeYYYYMMDD(log?.createDate)}</div>
                      </div>
                    </div>
                    <ul>
                      {
                        log?.content.split('", "').map((sentence, idx) => { 
                            return <li key={ idx }><p>{ sentence.replace('"', '') }</p></li>
                        })
                      }
                    </ul>
                  </li>
                )
              })
            }
          </ul>
        </CardBody>
      </CardBody>
    </Card>
  )
}

export default CardWebUpdateLog