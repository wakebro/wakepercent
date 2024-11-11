import { API_ABOUT_SITE_INTRODUCE_TO } from '@constants/api'
import { getDatas, lineChanging } from "@utility/util/aboutData"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Card, CardBody, CardText, Spinner } from "reactstrap"

const CardWelcom = () => {
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
      // contentType: 'site'
    }

    getDatas({
      API: API_ABOUT_SITE_INTRODUCE_TO, 
      params: params, 
      callback: callback
    })
  }, [i18n.language])

  return (
    <Card>
      <CardBody>
        <div className="text-center">
          <h1 className="mb-1 text-gray">Welcome to Wakepercent!</h1>
            {
              data == null || data.length === 0? <Spinner/>
              : data.map((d, idx) => {
                return <CardText key={idx}>{d}</CardText>
              })
            }
        </div>
      </CardBody>
    </Card>
  )
}

export default CardWelcom