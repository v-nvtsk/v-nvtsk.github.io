import { PropsWithChildren } from 'react'
import styles from './style.module.css'

interface ListItemProps extends PropsWithChildren {
  className?: string
  hideMark?: boolean
}

export function ListItem({ className, children, hideMark }: ListItemProps) {
  const markStyle = hideMark ? '' : styles.markedItem

  return (
    <li className={[markStyle, className].join(' ')}>
      {children}
    </li>
  )
}
