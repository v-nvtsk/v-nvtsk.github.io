import { MouseEvent } from 'react'
import styles from './style.module.css'

export function ContactsItem({ title, link }: { title: string, link: string }) {
  const openNewTab = (event: MouseEvent) => {
    console.log('event: ', event)
    event.preventDefault()
    prompt('WTF')
    // window.open(link, '_blank')
  }

  return (
    <div className={styles.component}>
      <a href={link} className={styles.link} onClick={openNewTab}>
        {title}
      </a>
    </div>
  )
}
