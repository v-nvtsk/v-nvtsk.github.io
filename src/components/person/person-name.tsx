import { PersonalInfo } from '@/types'
import styles from './style.module.css'
import { QR } from '../qr-code'

interface Props extends Partial<PersonalInfo> {
  showQr?: boolean
}

export function Person({ name, post, showQr = false }: Props) {
  const vCard = 'https://v-nvtsk.github.io'

  return (
    <div className={styles.personBlock}>
      <div className={styles.info}>
        <h1 className="person__name">{name}</h1>
        <h2 className="person__position">{post}</h2>
      </div>
      <div className={showQr ? styles.qrPdf : styles.qr}>
        <QR text={vCard} />
      </div>
    </div>
  )
}
