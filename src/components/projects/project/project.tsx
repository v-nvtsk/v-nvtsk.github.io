import { PetProject } from '@/types'
import styles from './style.module.css'

export function Project({ title, stack, link, description }: PetProject) {
  return (
    <div className={styles.project}>
      <p className={styles.title}>{title}</p>
      <p className={styles.stack}>{stack.join(', ')}</p>
      <a className={styles.link} href={link}>{link}</a>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
