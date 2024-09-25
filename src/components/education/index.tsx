export function Education() {
  return (
    <div className="education">
      <h2 className="skills-title">Образование</h2>
      <ul className="education__groups">
        <li className="education__group">
          <h3 className="education__title">Высшее образование</h3>
          <ul className="education__high-school">
            <li className="education__item">КарГТУ - строительства, бакалавр (2009)</li>
            <li className="education__item">
              КарГТУ - гидравлические машины и гидро пневмо-автоматика, инженер (2006)
            </li>
          </ul>
        </li>
        <li className="education__group">
          <h3 className="education__title">Дополнительное образование</h3>
          <ul className="education__additional">
            <li className="education__item">Школа 21-образовательный проект от Сбер для разработчиков (2024 - н.в)</li>
            <li className="education__item">ОТУС-онлайн образование курс JS-professional (2024 - н.в.)</li>
            <li className="education__item">ОТУС-онлайн образование курс JS-basic (2024)</li>
            <li className="education__item">ОТУС-онлайн образование курс HTML/CSS (2023)</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
