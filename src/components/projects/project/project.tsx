import { PetProject } from '@/types'
import { QR } from '@/components/qr-code'
import styles from './style.module.css'
import { ListItem } from '@/UI'
interface Props extends PetProject {
  showQr?: boolean
}

export function Project({ title, stack, link, deployLink, description, showQr = false }: Props) {
  return (
    <ListItem hideMark className={styles.project}>
      <div className={styles.info}>
        <h3>
          {title}
          {' | '}
          {stack.join(', ')}
        </h3>
        <a className={styles.link} href={link} target="_blank">{link}</a>
        {deployLink && <a className={styles.link} href={deployLink}>{deployLink}</a>}
        <p className={styles.description}>{description}</p>
      </div>
      {showQr && <div className={styles.qr}><QR text={link} /></div>}
    </ListItem>
  )
}
