import { Education as EducationProps } from '@/types'
import { List, ListItem, Title } from '@/UI'

import styles from './style.module.css'

interface EducationItemProps {
  institution: string
  specialization: string
  startDate?: string | undefined
  endDate?: string
}

export function Education({ education }: { education: EducationProps }) {
  const EducationListItem = ({ institution, specialization, startDate, endDate = '' }: EducationItemProps) => (
    <ListItem>{`${institution} - ${specialization}, ${startDate ? `${startDate} - ` : ''}${endDate}`}</ListItem>
  )

  const EducationList = ({ title, items }: { title: string, items: EducationProps['courses'] | EducationProps['higherEducation'] }) => (
    <ListItem className={styles.group} hideMark>
      <h3 className={styles.title}>{title}</h3>
      <List padding={10}>
        {items.map(({ institution, specialization, startDate, endDate }, index) => (
          <EducationListItem key={index} institution={institution} specialization={specialization} startDate={startDate} endDate={endDate} />
        ))}

      </List>
    </ListItem>
  )

  return (
    <div className="education">
      <Title title="Образование" />
      <List>
        <EducationList title="Высшее образование" items={education.higherEducation} />
        <EducationList title="Дополнительное образование" items={education.courses} />
      </List>
    </div>
  )
}
