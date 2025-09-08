import './RatingView.scss'
import classNames from 'classnames'

const RatingView = (props) => {
  const {
    className,
    value= 5,
    label,
  } = props

  const ariaLabel = `Rating ${value} stars`

  return (
    <div
      className='rating-view'
      aria-label={ariaLabel}
      title={ariaLabel}
      style={{
        '--ratingViewValue': value,
      }}
    >
      <div className="rating-view__stars">
        <img
        className="rating-view__stars-unfilled"
        src="/rating/stars_unfilled.svg"
        width={98}
        height={18}
        alt=""
        />
        <img
          className="rating-view__stars-filled"
          src="/rating/stars_filled.svg"
          width={98}
          height={18}
          alt=""
        />
      </div>
      {label && (
        <div className="rating-view__label">{label}</div>
      )}
    </div>
  )
}

export default RatingView