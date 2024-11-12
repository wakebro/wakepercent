import { API_ABOUT_SITE_INTRODUCE_TO } from "@constants/api"
import { getDatas, lineChanging } from "@utility/util/aboutData"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Col, Row, Spinner } from "reactstrap"

const CardIntroduce = () => {
  const { i18n } = useTranslation()
  const [data, setData] = useState<string[]>([])

  async function callback (data?: Record<string, any>) {
    if (data !== null) {
      const result = data?.['result']['content']
      await lineChanging(
        result, 
        setData as React.Dispatch<React.SetStateAction<typeof result>>
      )
    }
  }

  useEffect(() => {
    const params = {
      lang: i18n.language,
      contentType: 'me'
    }

    getDatas({
      API: API_ABOUT_SITE_INTRODUCE_TO,
      params: params,
      callback: callback
    })

  }, [i18n.language])
  return (
    <div>
      <Row>
        <Col sm='12' md='3'>
            <h2 className="text-md-center-lo-left">INTRODUCE</h2>
        </Col>

        <Col sm='12' md='9'>
        {
              data == null || data.length === 0? <Spinner/>
              : data.map((d, idx) => {
                return <p key={idx}>{d}</p>
              })
            }
        </Col>
      </Row>
    </div>
  )
}

export default CardIntroduce