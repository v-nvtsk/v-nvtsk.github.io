import { useCallback, useEffect, useState } from 'react'
import { About } from './components/about'
import { Contacts } from './components/contacts'
import { Education } from './components/education'
import { Experience } from './components/experience'
import { Languages } from './components/languages'
import { Person } from './components/person/person-name'
import { Photo } from './components/photo'
import { PetProjects } from './components/projects'
import { Skills } from './components/skills'
import { Main, Sidebar } from './layout'

import { useDispatch, useSelector } from 'react-redux'
import styles from './app.module.css'
import { Header } from './layout/header'
import { fetchJSON } from './service/fetch-json'
import { saveToPdf } from './service/save-pdf'
import { cvSelector } from './store/selectors/cvSelector'
import { setEditMode } from './store/slices/appSlice'
import { CVState, updateData } from './store/slices/cv-data.slice'

function App() {
  const dispatch = useDispatch()
  const data = useSelector(cvSelector)
  const [isQrVisible, setIsQrVisible] = useState(false)
  const searchParams = new URLSearchParams(window.location.search)
  const editMode = searchParams.has('edit')

  const savePdfHandler = useCallback((ev: React.MouseEvent) => {
    ev.preventDefault()
    setIsQrVisible(true)
  }, [])

  useEffect(() => {
    if (isQrVisible) {
      saveToPdf().then(() => setIsQrVisible(false))
    }
  }, [isQrVisible])

  useEffect(() => {
    async function temporaryInitState(): Promise<CVState> {
      return await fetchJSON() as CVState
    }

    temporaryInitState()
      .then((res) => {
        dispatch(updateData({ ...res, isLoading: false }))
      })
    dispatch (setEditMode(editMode))
  }, [editMode])

  const { personal, about, contacts, skills, languages, education, projects, experience } = data

  return (
    <>
      <Header savePdf={savePdfHandler} />
      <div className={styles.whiteSpace} />
      <div className={styles.container}>
        {data.isLoading && <p>Loading...</p>}
        {!data.isLoading && (
          <div className={[styles.page, !isQrVisible && styles.pageGradient].join(' ')} id="page">
            <Sidebar>
              <Photo />
              <Contacts contacts={contacts} />
              <Skills skills={skills} />
              <Languages languages={languages} />
              <Education education={education} />
            </Sidebar>
            <Person name={personal.name} post={personal.post} showQr={isQrVisible} qrLink={contacts.github} />
            <Main>
              <Experience experience={experience} />
              <About about={about} />
              <PetProjects projects={projects} showQr={isQrVisible} />
            </Main>
          </div>
        )}
      </div>
    </>
  )
}

export default App
