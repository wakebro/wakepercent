import { useTranslation } from "react-i18next"
import { Card, CardBody, CardTitle } from "reactstrap"

const CardWebUpdateLog = () => {
  const { t, i18n} = useTranslation()
  return (
    <Card>
      <CardBody>
        <CardTitle>{t(`about.webUpdateLog`)}</CardTitle>
        <CardBody>
          <ul className="timeline">
            <li className="timeline-item">
              <span className="timeline-point timeline-point-indicator"/>
              <div className="timeline-event">
                <div className="d-flex justify-content-between flex-sm-row flex-column', {
                  'mb-sm-0 mb-1">
                  <h4>Hello</h4>
                  <div className="timeline-event-time">
                    2024.11.11
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officia quam illum consectetur, veniam illo assumenda, deserunt quo quod accusamus ullam animi cumque minima aliquid laboriosam voluptate, porro placeat eum?
              </p>
            </li>
            <li className="timeline-item">
              <span className="timeline-point timeline-point-indicator"/>
              <div className="timeline-event">
                <div className="d-flex justify-content-between flex-sm-row flex-column', {
                  'mb-sm-0 mb-1">
                  <h4>Hello</h4>
                  <div className="timeline-event-time">
                    2024.11.11
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officia quam illum consectetur, veniam illo assumenda, deserunt quo quod accusamus ullam animi cumque minima aliquid laboriosam voluptate, porro placeat eum?
              </p>
            </li>
            <li className="timeline-item">
              <span className="timeline-point timeline-point-indicator"/>
              <div className="timeline-event">
                <div className="d-flex justify-content-between flex-sm-row flex-column', {
                  'mb-sm-0 mb-1">
                  <h4>Hello</h4>
                  <div className="timeline-event-time">
                    2024.11.11
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officia quam illum consectetur, veniam illo assumenda, deserunt quo quod accusamus ullam animi cumque minima aliquid laboriosam voluptate, porro placeat eum?
              </p>
            </li>
          </ul>
        </CardBody>
      </CardBody>
    </Card>
  )
}

export default CardWebUpdateLog