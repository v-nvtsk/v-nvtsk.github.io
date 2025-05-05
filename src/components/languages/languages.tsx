import { isNotVoid } from '@/service/is-void'
import { Language } from '@/types'
import { List, Title } from '@/UI'
import styles from './style.module.css'
import { ListItem } from '@/UI'

export function Languages({ languages }: { languages: Language[] }) {
  return (
    <div className="languages">
      <Title title="Языки" />
      <List>
        {languages.map(({ name, grade = '' }) => (
          <ListItem className={styles.listItem} key={name}>
            <span className="item__name">{name}</span>
            {isNotVoid(grade)
            && (
              <span className="item__level">
                {' - '}
                {grade}
              </span>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  )
}
