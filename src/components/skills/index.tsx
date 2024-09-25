export function Skills() {
  return (
    <div className="skills">
      <h2 className="contacts__title">Навыки</h2>
      <ul className="skills__groups">
        <li className="skills__group">
          <h3 className="skills-title">Основной стек:</h3>
          <ul className="skills__subgroup">
            <li className="skills__item">Typescript</li>
            <li className="skills__item">Javascript</li>
            <li className="skills__item">HTML/CSS</li>
          </ul>
        </li>

        <li className="skills__group">
          <h3 className="skills-title">Дополнительно:</h3>
          <ul className="skills__additional">
            <li className="skills__item">VB, VBA</li>
            <li className="skills__item">bash</li>
            <li className="skills__item">Си</li>
            <li className="skills__item">MASM32</li>
          </ul>
        </li>

        <li className="skills__group">
          <h3 className="skills-title">Работа с БД:</h3>
          <ul className="skills__database">
            <li className="skills__item">firebase</li>
            <li className="skills__item">mongodb</li>
            <li className="skills__item">PostgreSQL</li>
          </ul>
        </li>

        <li className="skills__group">
          <h3 className="skills-title">Фреймворки, технологии:</h3>
          <ul className="skills__framework">
            <li className="skills__item">React</li>
            <li className="skills__item">Redux</li>
            <li className="skills__item">Jest test framework</li>
            <li className="skills__item">React-testing-library</li>
            <li className="skills__item">Playwright</li>
          </ul>
        </li>

        <li className="skills__group">
          <h3 className="skills-title">Инструменты разработки:</h3>
          <ul className="skills__tools">
            <li className="skills__item">GIT, GitHub, GitLab, Bitbucket</li>
            <li className="skills__item">Webpack</li>
            <li className="skills__item">ESLint</li>
            <li className="skills__item">Husky</li>
            <li className="skills__item">figma</li>
            <li className="skills__item">Jira</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
