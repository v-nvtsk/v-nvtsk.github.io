import { ExperienceItem, ExperienceList } from '@/types'
import { List, ListItem, Title } from '@/UI'
import styles from './style.module.css'

interface Props {
  experience: ExperienceList
}

export function Experience({ experience }: Props) {
  const dates = (item: ExperienceItem) => `${item.startDate} - ${item.endDate || 'н.в.'}`

  return (
    <section className="experience">
      <Title title="Опыт работы" />
      <List listStyle="none">
        {experience.map((item, index) => (
          <ListItem key={index} hideMark>
            <div className={styles.titleGroup}>
              <h3>{item.organization}</h3>
              <p className="item__date">{dates(item)}</p>
            </div>
            <p className="item__title">{item.post}</p>
            {item.postDescription && <p className="item__description">{item.postDescription}</p>}
            <h4 className={styles.subtitle}>Функции / Достижения:</h4>
            <List padding={10}>
              {item.responsibilities.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </section>
  )
}
