import { PersonalInfo } from '@/types'
import styles from './style.module.css'
import { QR } from '../qr-code'

interface Props extends Partial<PersonalInfo> {
  showQr?: boolean
  qrLink: string

}

export function Person({ name, post, showQr = false, qrLink = '' }: Props) {
  return (
    <section className={styles.personBlock}>
      <div className={styles.personWrapper}>
        <div className={styles.info}>
          <h1 className={styles.personName}>{name}</h1>
          <h2 className={styles.personPosition}>{post}</h2>
        </div>
        <div className={showQr ? styles.qrPdf : styles.qr}>
          {qrLink && <QR text={qrLink} />}
        </div>
      </div>
    </section>
  )
}
