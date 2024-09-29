import { About } from './components/about'
import { Contacts } from './components/contacts'
import { Education } from './components/education'
import { Experience } from './components/experience'
import { Languages } from './components/languages'
import { Person } from './components/person/person-name'
import { Photo } from './components/photo'
import { PetProjects } from './components/projects'
import { Skills } from './components/skills'
import './index.css'
import { Main, Sidebar } from './layout'
import styles from './style.module.css'
import { fetchJSON } from './service/fetch-json'
import { isVoid } from './service/is-void'
import { useEffect, useState } from 'react'
import { CVData } from './types'

function App() {
  const [data, setData] = useState<CVData | null>(null)

  useEffect(() => {
    fetchJSON().then(setData).catch(console.error)
  }, [])

  if (isVoid(data)) return <p>Loading...</p>

  const { personal, contacts, skills, languages, education, projects, experience } = data

  return (
    <div className={styles.page}>
      <Sidebar>
        <Photo />
        <Contacts contacts={contacts} />
        <Skills skills={skills} />
        <Languages languages={languages} />
        <Education education={education} />
      </Sidebar>
      <Main>
        <Person name={personal.name} post={personal.post} />
        <About />
        <PetProjects projects={projects} />
        <Experience experience={experience} />
      </Main>
    </div>
  )
}

export default App
