import './PlanCard.scss'
import classNames from 'classnames'
import Button from "@/components/Button";

const PlanCard = (props) => {
  const {
    title,
    description,
    price,
  } = props

  return (
    <div className="plan-card">
      <div className="plan-card__info">
        <h3 className="plan-card-title">{title}</h3>
        <div className="plan-card__descrition">
          <p>{description}</p>
        </div>
      </div>
      <div className="plan-card__conditions">
        <span className="plan-card__price">{price.value}</span>
        <span className="plan-card__period">{price.label}</span>
      </div>
      <div className="plan-card__actions">
        <Button
        label="Start Free Trial"
        href="/subscription"
        mode="black-08"
        />
        <Button
          label="Start Free Trial"
          href="/subscription"
        />
      </div>
    </div>
  )
}

export default PlanCard