import { About as AboutProps } from '@/types'
import { Title } from '@/UI'

interface Props {
  about: AboutProps
}

export function About({ about }: Props) {
  return (
    <section className="about">
      <Title title="О себе" />
      {about.text.map((item, index) => <p key={index}>{item}</p>)}
    </section>
  )
}
