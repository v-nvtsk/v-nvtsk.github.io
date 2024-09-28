import { PropsWithChildren } from 'react'
import styles from './style.module.css'

interface ListProps extends PropsWithChildren {
  listStyle?: string
}

export function List({ children, listStyle }: ListProps) {
  const style: Record<string, string> | null = listStyle
    ? {
        listStyleType: listStyle ?? 'none',
      }
    : {}

  return (
    <ul className={styles.list} style={style}>
      {children}
    </ul>
  )
}
