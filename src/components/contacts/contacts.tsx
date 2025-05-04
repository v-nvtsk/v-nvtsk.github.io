import { Contacts as ContactsProps } from '@/types'
import { Title } from '@/UI'
import styles from './style.module.css'

export function ContactsItem({ title, link, icon, iconAlt }: { title: string, link: string, icon?: string, iconAlt?: string }) {
  return (

    <div className={styles.contactsItemWrapper}>
      <img src={icon} alt={iconAlt} />
      <div className={styles.component}>
        <a href={link} className={styles.link}>{title}</a>
      </div>
    </div>

  )
}

export function Contacts({ contacts }: { contacts: ContactsProps }) {
  const { phone, email, github, telegram, city } = contacts

  return (
    <section className={styles.contacts}>
      <Title title="Контакты" />

      {phone && (
        <ContactsItem
          title={phone}
          link={'tel:' + phone}
          icon="/icons/phone.svg"
          iconAlt="phone"
        />
      )}
      {email && (
        <ContactsItem
          title={email}
          link={'mailto:' + email}
          icon="/icons/email.svg"
          iconAlt="email"
        />
      )}
      {github
      && (
        <ContactsItem
          title={'https://github.com/' + github}
          link={'https://github.com/' + github}
          icon="/icons/link.svg"
          iconAlt="github link"
        />
      )}
      {telegram
      && (
        <ContactsItem
          title={'@' + telegram}
          link={'https://t.me/' + telegram}
          icon="/icons/telegram.svg"
          iconAlt="telegram"
        />
      )}
      {city && (
        <ContactsItem
          title={city}
          link={'https://www.google.ru/maps/place/' + city}
          icon="/icons/map.svg"
          iconAlt="map link"
        />
      )}
    </section>
  )
}
