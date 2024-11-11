import { API_ABOUT_COMPOSITON_IMG } from '@constants/resource'
import { useTranslation } from "react-i18next"
import { Card, CardBody, CardText, CardTitle } from "reactstrap"

const CardComposition = () => {
  const { t } = useTranslation()
  return (
    <Card>
      <CardBody>
        <CardTitle>{ t(`about.webComposition`) }</CardTitle>
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