import { PetProject } from '@/types'
import { QR } from '@/components/qr-code'
import styles from './style.module.css'

export function Project({ title, stack, link, deployLink, description }: PetProject) {
  return (
    <div className={styles.project}>
      <div className={styles.info}>
        <h3>
          {title}
          {' '}
          |
          {' '}
          {stack.join(', ')}
        </h3>
        <a className={styles.link} href={link}>{link}</a>
        {deployLink && <a className={styles.link} href={deployLink}>{deployLink}</a>}
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.qr}><QR text={link} /></div>

    </div>
  )
}

/*

export function Project({ title, stack, link, deployLink, description }: PetProject) {
  return (
    <div className={styles.project}>
      <p className={styles.title}>
        {title}
        {' '}
        |
        {' '}
        {stack.join(', ')}
      </p>
      <a className={styles.link} href={link}>{link}</a>
      {deployLink && <a className={styles.link} href={deployLink}>{deployLink}</a>}
      <p className={styles.description}>{description}</p>
      <div className={styles.qr}><QR text={link} /></div>
    </div>
  )
}

*/
