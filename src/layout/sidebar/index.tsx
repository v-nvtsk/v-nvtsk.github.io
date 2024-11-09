import { PropsWithChildren } from 'react'
import styles from './styles.module.css'

export function Sidebar({ children }: PropsWithChildren) {
  return (
    <aside className={styles.sidebar}>
      {children}
    </aside>
  )
}
