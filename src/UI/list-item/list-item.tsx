import { PropsWithChildren, useState } from 'react'
import styles from './style.module.css'
import { useSelector } from 'react-redux'
import { appSelector } from '@/store/selectors/appSelector'

interface ListItemProps extends PropsWithChildren {
  className?: string
  hideMark?: boolean
}

export function ListItem({ className, children, hideMark }: ListItemProps) {
  const { editMode } = useSelector(appSelector)
  const [hover, setHover] = useState('')

  const markStyle = hideMark ? '' : styles.markedItem

  const hoverHandler = (ev: React.MouseEvent) => {
    ev.stopPropagation()
    if (editMode)setHover(styles.hovered)
  }

  return (
    <>
      <li
        className={[markStyle, className, styles.listItem, hover].join(' ')}
        onMouseOut={() => setHover('')}
        onMouseOver={hoverHandler}
      >
        <div className={styles.removeBtnWrapper}>
          <button className={styles.removeBtn}>✕</button>
        </div>
        {children}
      </li>
    </>
  )
}
