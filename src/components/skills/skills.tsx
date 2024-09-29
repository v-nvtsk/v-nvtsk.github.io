import { SkillsList as SkillsProps } from '@/types'
import { List, Title } from '@/UI'
import { ListItem } from '@/UI'

export function Skills({ skills }: { skills: SkillsProps }) {
  return (
    <div className="skills">
      <Title title="Навыки" />
      <List>
        {skills.map(({ title, list }) => (
          <ListItem key={title}>
            <h3 className="skills-title">{title}</h3>
            <List key={title}>
              {list.map(item => <ListItem key={item}>{item}</ListItem>)}
            </List>
          </ListItem>
        ))}
      </List>
    </div>
  )
}