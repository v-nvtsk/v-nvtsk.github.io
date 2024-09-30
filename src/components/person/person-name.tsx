import { PersonalInfo } from '@/types'
import styles from './style.module.css'
import { QR } from '../qr-code'

export function Person({ name, post }: Partial<PersonalInfo>) {
  const vCard = 'https://v-nvtsk.github.io'

  return (
    <div className={styles.personBlock}>
      <div className={styles.info}>
        <h1 className="person__name">{name}</h1>
        <h2 className="person__position">{post}</h2>
      </div>
      <div className={styles.qr}>
        <QR text={vCard} />
      </div>
    </div>
  )
}
