export function Experience() {
  return (
    <section className="experience">
      <h2 className="main-title">Опыт работы</h2>

      <ul className="experience__list">

        <li className="experience__item">
          <h3 className="item__name">ПАО "Сбербанк России"</h3>
          <p className="item__title">Стажер-инженер javascript</p>
          <p className="item__date">июнь 2024 - н.в</p>
          <p className="item__achievements achievments">Функции / Достижения</p>
          <ul className="achievments__list">
            <li className="achievments__item">Разработка сайтов на JavaScript</li>
            <li className="achievments__item">Разработка сайтов на React</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}
