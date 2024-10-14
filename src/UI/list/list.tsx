import { PropsWithChildren, useState } from 'react'
import styles from './style.module.css'

interface ListProps extends PropsWithChildren {
  listStyle?: string
  padding?: number
  editable?: boolean
}

export function List({ children, listStyle, padding = 0, editable = true }: ListProps) {
  const [hover, setHover] = useState('')
  const style: Record<string, string> | null = {
    listStyleType: listStyle ?? 'none',
    paddingLeft: padding + 'px',
  }

  const hoverHandler = (ev: React.MouseEvent) => {
    ev.stopPropagation()
    setHover(styles.hovered)
  }

  return (
    <div>
      <ul
        className={[styles.list, hover].join(' ')}
        onMouseOut={() => setHover('')}
        onMouseMove={hoverHandler}
        style={style}
      >
        {children}
        {editable
        && (
          <div className={styles.appendButtons}>
            <button className={styles.appendBtn}>+</button>
          </div>
        )}
      </ul>
    </div>
  )
}
