import { About as AboutProps } from '@/types'
import { Title } from '@/UI'
import styles from './style.module.css'

interface Props {
  about: AboutProps
}

export function About({ about }: Props) {
  return (
    <section className={styles.about}>
      <div className={styles.floatTitle}>
        <Title title="О себе" />
      </div>
      <div className={styles.aboutContent}>
        {about.text.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </section>
  )
}
