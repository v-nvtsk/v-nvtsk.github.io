import { About as AboutProps } from '@/types'
import { List, ListItem, Title } from '@/UI'

interface Props {
  about: AboutProps
}

export function About({ about }: Props) {
  return (
    <section className="about">
      <Title title="О себе" />
      <List>
        {about.text.map((item, index) => <ListItem hideMark key={index}>{item}</ListItem>)}
      </List>
    </section>
  )
}
