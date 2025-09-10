import './Ratings.scss'
import classNames from 'classnames'
import RatingView from "@/components/RatingView";

const Ratings = (props) => {
  const {
    items= [],
  } = props

  return (
    <div className='ratings'>
      <ul className="rating__list">
        {items.map(({title, ratingValue}, index)=> (
          <li className="ratings__item" key={index}>
            <h4 className="ratings__title">{title}</h4>
            <RatingView
            value={ratingValue}
            label={ratingValue}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ratings