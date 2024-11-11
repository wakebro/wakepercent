import { API_ABOUT_COMPOSITON_IMG } from '@constants/resource'
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Card, CardBody, CardText, CardTitle } from "reactstrap"

const CardComposition = () => {
  const { i18n } = useTranslation()
  useEffect(() => {
    console.log(i18n.language)
  }, [i18n.language])
  return (
    <Card>
      <CardBody>
        <CardTitle>Composition</CardTitle>
          <div className="text-center">
            <CardText>
              <img src={API_ABOUT_COMPOSITON_IMG} alt='composition'/>
            </CardText>
          </div>
      </CardBody>
    </Card>
  )
}

export default CardComposition