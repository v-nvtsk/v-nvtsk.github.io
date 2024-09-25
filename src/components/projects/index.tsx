export function PetProjects() {
  return (
    <section className="pet-projects">
      <h2 className="main-title">PET проекты</h2>

      <ul className="pet-projects__list">
        <li className="pet-projects__item project">
          <div className="item__header">
            <h3 className="project__title">Календарь событий</h3>
            <span className="project__separator">&nbsp;|&nbsp;</span>
            <ul className="project__technologies">
              <li className="project__technology">HTML</li>
              <li className="project__technology">CSS</li>
              <li className="project__technology">JS</li>
            </ul>
          </div>
          <a
            href="https://github.com/v-nvtsk/otus-jsbasic-calendar"
            className="project__link"
          >
            https://github.com/v-nvtsk/otus-jsbasic-calendar
          </a>
          <p className="project__description">
            Проект для учёта событий, задач. Поддерживает авторизацию пользователей по
            email и паролю.
          </p>
        </li>
      </ul>
    </section>
  )
}
