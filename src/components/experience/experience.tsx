import { ExperienceList } from '@/types'
import { List, ListItem, Title } from '@/UI'

interface Props {
  experience: ExperienceList
}

export function Experience({ experience }: Props) {
  return (
    <section className="experience">
      <Title title="Опыт работы" />
      <List>
        {experience.map((item, index) => (
          <ListItem key={index}>
            <h3>{item.organization}</h3>
            <p className="item__title">{item.post}</p>
            <p className="item__date">{`${item.startDate} - ${item.endDate}`}</p>
            <h4>Функции / Достижения</h4>
            <List>
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
