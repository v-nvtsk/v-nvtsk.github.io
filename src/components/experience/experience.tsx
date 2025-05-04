import { ExperienceItem, ExperienceList } from '@/types'
import { List, ListItem, Title } from '@/UI'
import styles from './style.module.css'

interface Props {
  experience: ExperienceList
}

export function Experience({ experience }: Props) {
  const dates = (item: ExperienceItem) => `${item.startDate} - ${item.endDate || 'н.в.'}`

  return (
    <section className={styles.experience}>
      <div className={styles.floatTitle}>
        <Title title="Опыт разработки" />
      </div>
      <List listStyle="none">
        {experience.map((item, index) => (
          <div className={styles.itemWrapper}>
            <ListItem key={index} hideMark>
              <div className={styles.titleGroup}>
                <h3>{item.organization}</h3>
                <h3 className="item__title">{item.post}</h3>
                <h3 className="item__date">{dates(item)}</h3>
              </div>
              {item.postDescription && <p className="item__description">{item.postDescription}</p>}
              <h4 className={styles.subtitle}>Функции / Достижения:</h4>
              <List padding={10}>
                {item.responsibilities.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
            </ListItem>
          </div>
        ))}
      </List>
    </section>
  )
}
