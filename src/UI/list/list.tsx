import { PropsWithChildren } from 'react'
import styles from './style.module.css'

interface ListProps extends PropsWithChildren {
  listStyle?: string
  padding?: number
}

export function List({ children, listStyle, padding }: ListProps) {
  const style: Record<string, string> | null = listStyle
    ? {
        listStyleType: listStyle ?? 'none',
        padding: padding + 'px',
      }
    : {}

  return (
    <ul className={styles.list} style={style}>
      {children}
    </ul>
  )
}
