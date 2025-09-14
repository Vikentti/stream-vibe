import './Seasons.scss'
import classNames from 'classnames'
import AccordionGroup from "@/components/AccordionGroup";
import seasonItems from "@/components/Seasons/seasonItems";
import Accordion from "@/components/Accordion";
import seasons from "@/components/Seasons/index";
import EpisodeCard from "@/components/EpisodeCard";

const Seasons = (props) => {

  return (
    <AccordionGroup
      className="seasons"
      mode="dark"
      isOrderedList={false}
    >

      {seasonItems.map(({title, subtitle, episodes}, index) => (
        <Accordion
          title={title}
          titleLevelClassName="h4"
          subtitle={subtitle}
          id={`season-${index}`}
          name="seasons"
          isOpen={index === 0}
          key={index}
          isArrowButton
        >
          <ul className="seasons__list">
            {episodes.map((episode, index) => (
              <li className="season__item" key={index}>
                <EpisodeCard {...episode}/>
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons