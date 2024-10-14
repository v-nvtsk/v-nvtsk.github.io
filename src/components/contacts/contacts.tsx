import { Contacts as ContactsProps } from '@/types'
import { Title } from '@/UI'
import styles from './style.module.css'

export function ContactsItem({ title, link }: { title: string, link: string }) {
  return (
    <div className={styles.component}>
      <a href={link} className={styles.link}>{title}</a>
    </div>
  )
}

export function Contacts({ contacts }: { contacts: ContactsProps }) {
  const { phone, email, github, telegram, city } = contacts

  return (
    <div>
      <div className={styles.contacts}>
        <Title title="Контакты" />
        {phone && <ContactsItem title={phone} link={'tel:' + phone} />}
        {email && <ContactsItem title={email} link={'mailto:' + email} />}
        {github && <ContactsItem title={'https://github.com/' + github} link={'https://github.com/' + github} />}
        {telegram && <ContactsItem title={'@' + telegram} link={'https://t.me/' + telegram} />}
        {city && <ContactsItem title={city} link={'https://www.google.ru/maps/place/' + city} />}
      </div>
    </div>
  )
}
