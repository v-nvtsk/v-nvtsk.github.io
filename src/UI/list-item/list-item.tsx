import { PropsWithChildren, useState } from 'react'
import styles from './style.module.css'
import { useSelector } from 'react-redux'
import { appSelector } from '@/store/selectors/appSelector'

interface ListItemProps extends PropsWithChildren {
  className?: string
  hideMark?: boolean
  inlineBlock?: boolean
}

export function ListItem({ className, children, hideMark, inlineBlock = false }: ListItemProps) {
  const { editMode } = useSelector(appSelector)
  const [hover, setHover] = useState('')

  const markStyle = hideMark ? '' : styles.markedItem
  const inline = inlineBlock ? styles.inlineBlock : ''
  const itemClassList = [markStyle, className, styles.listItem, hover, inline]

  const hoverHandler = (ev: React.MouseEvent) => {
    ev.stopPropagation()
    if (editMode)setHover(styles.hovered)
  }

  return (
    <>
      <li
        className={itemClassList.join(' ')}
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
