import { PropsWithChildren } from 'react'
import styles from './style.module.css'

interface ListItemProps extends PropsWithChildren {
  className?: string
}

export function ListItem({ className, children }: ListItemProps) {
  return (
    <li className={[styles.listItem, className].join(' ')}>
      {children}
    </li>
  )
}
