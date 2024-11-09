import { useResize } from '@/hooks/use-resize'
import { SkillsList as SkillsProps } from '@/types'
import { List, Title } from '@/UI'
import { ListItem } from '@/UI'

export function Skills({ skills }: { skills: SkillsProps }) {
  const { isScreenSm } = useResize()

  const isInline = !isScreenSm

  return (
    <div className="skills">
      <Title title="Навыки" />
      <List padding={10}>
        {skills.map(({ title, list }) => (
          <ListItem key={title}>
            <h3 className="skills-title">{title}</h3>
            <List key={title} padding={10}>
              { isInline
                ? list.join(', ')
                : list.map(item => <ListItem key={item} inlineBlock={isInline}>{item}</ListItem>)}
            </List>
          </ListItem>
        ))}
      </List>
    </div>
  )
}
