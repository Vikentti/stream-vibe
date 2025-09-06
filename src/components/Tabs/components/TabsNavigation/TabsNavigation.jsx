import './TabsNavigation.scss'
import classNames from 'classnames'
import getIdFromTitle from "@/utils/getIdFromTitle";
import getTabsElementsIdsFromTitle
  from "@/components/Tabs/utils/getTabsElementsIdsFromTitle";

const TabsNavigation = (props) => {
  const {
    className,
    id,
    title,
    items = [],
  } = props

  const titleFormated = getIdFromTitle(title)
  const titleId = `${titleFormated}-title`

  return (
    <div
      className={classNames(className, 'tabs-navigation')}
      id={id}
      role="tablist"
      aria-labelledby={titleId}
      data-js-tabs-navigation=""
    >
      <h3
        className="visually-hidden"
        id={titleId}
      >
        {title}
      </h3>
      {items.map((item, index) => {

        const {buttonId, contentId} = getTabsElementsIdsFromTitle(item.title)


        return (
          <div
            className={classNames('tabs-navigation__button', {
              "is-active": item.isActive
            })}
            id={buttonId}
            aria-controls={contentId}
            role="tab"
            aria-selected={item.isActive}
            tabIndex={item.isActive ? 0 : -1}
            data-js-tabs-button=""
            key={index}
          >
            {item.title}
          </div>
        )
      })}
    </div>
  )
}

export default TabsNavigation