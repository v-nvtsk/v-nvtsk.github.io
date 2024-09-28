import { Education as EducationProps } from '@/types'
import { List, ListItem, Title } from '@/UI'

interface EducationItemProps { institution: string, specialization: string, endDate: string | undefined }

export function Education({ education }: { education: EducationProps }) {
  const EducationItem = ({ institution, specialization, endDate = '' }: EducationItemProps) => (
    <ListItem>{`${institution} - ${specialization}, ${endDate}`}</ListItem>
  )

  return (
    <div className="education">
      <Title title="Образование" />
      <List>
        <ListItem className="education__group">
          <h3 className="education__title">Высшее образование</h3>
          <List>
            {education.higherEducation.map(({ institution, specialization, endDate }, index) => (
              <EducationItem key={index} institution={institution} specialization={specialization} endDate={endDate} />

            ))}
          </List>
        </ListItem>
        <ListItem className="education__group">
          <h3 className="education__title">Дополнительное образование</h3>
          <List>
            {education.courses.map(({ institution, specialization, endDate }, index) => (
              <EducationItem key={index} institution={institution} specialization={specialization} endDate={endDate} />
            ))}

          </List>
        </ListItem>
      </List>
    </div>
  )
}
