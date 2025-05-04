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
  const EducationItem = ({ institution, specialization, startDate, endDate = '' }: EducationItemProps) => (
    <ListItem>{`${institution} - ${specialization}, ${startDate ? `${startDate} - ` : ''}${endDate}`}</ListItem>
  )

  return (
    <div className="education">
      <Title title="Образование" />
      <List>
        <ListItem className={styles.group} hideMark>
          <h3 className={styles.title}>Высшее образование</h3>
          <List padding={10}>
            {education.higherEducation.map(({ institution, specialization, startDate, endDate }, index) => (
              <EducationItem key={index} institution={institution} specialization={specialization} startDate={startDate} endDate={endDate} />

            ))}
          </List>
        </ListItem>
        <ListItem className={styles.group} hideMark>
          <h3 className={styles.title}>Дополнительное образование</h3>
          <List padding={10}>
            {education.courses.map(({ institution, specialization, startDate, endDate }, index) => (
              <EducationItem key={index} institution={institution} specialization={specialization} startDate={startDate} endDate={endDate} />
            ))}

          </List>
        </ListItem>
      </List>
    </div>
  )
}
