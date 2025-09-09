import './MovieDetails.scss'
import classNames from 'classnames'

const MovieDetails = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'movie-details')}
    >
      MovieDetails
    </div>
  )
}

export default MovieDetails