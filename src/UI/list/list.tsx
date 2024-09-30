import { PropsWithChildren } from 'react'
import styles from './style.module.css'

interface ListProps extends PropsWithChildren {
  listStyle?: string
  padding?: number
}

export function List({ children, listStyle, padding = 0 }: ListProps) {
  const style: Record<string, string> | null = {
    listStyleType: listStyle ?? 'none',
    paddingLeft: padding + 'px',
  }

  return (
    <ul className={styles.list} style={style}>
      {children}
    </ul>
  )
}
