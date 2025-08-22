import './Socials.scss'
import classNames from 'classnames'
import Button from "@/components/Button";
import {ReactComponent as SVGLinked} from '@/assets/icons/linked-in.svg'
import {ReactComponent as SVGTwitter} from '@/assets/icons/twitter.svg'
import {ReactComponent as SVGFacebook} from '@/assets/icons/facebook.svg'

const Socials = (props) => {
  const {
    className,
    links = [],

  } = props

  const soc1alSVG = [SVGFacebook, SVGTwitter, SVGLinked]

  return (
    <div
      className={classNames(className, 'soc1als')}
    >
      <ul className="soc1als__list">
        {links.map(({label, iconName}, index) => (
          <li
            className="soc1als__item"
            key={index}
          >
            <Button
              className='soc1als__link'
              mode="black-10"
              href="/"
              target="_blank"
              label={label}
              isLabelHidden
              iconName={iconName}
              hasFillIcon
              IconFallbackSVG={soc1alSVG[index]}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials