export function Contacts() {
  return (
    <div className="contacts">
      <h2 className="contacts__title">Контакты</h2>
      <div className="contacts__phone phone">
        <a href="tel:+79038117314" className="phone__link"></a>
        Name
      </div>
      <div className="contacts_email">
        <a href="mailto:vladislav@nvtsk.ru" className="email__link"></a>
        Name
      </div>
      <div className="contacts__github github">
        <a href="https://github.com/v-nvtsk" className="github__link"></a>
        Name
      </div>
      <div className="contacts__telegram telegram">
        <a href="https://t.me/no_vlad" className="telegram__link"></a>
        Name
      </div>
      <div className="contacts_city city">
        <p className="city_name">Москва</p>
        Name
      </div>
    </div>
  )
}
