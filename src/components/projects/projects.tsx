import { PetProject } from '@/types'
import { List, Title } from '@/UI'
import { Project } from './project'
import styles from './styles.module.css'

interface Props {
  projects: PetProject[]
  showQr?: boolean
}

export function PetProjects({ projects, showQr = false }: Props) {
  return (
    <section className={styles.projects}>
      <div className={styles.floatTitle}>
        <Title title="PET проекты" />
      </div>
      <List padding={0}>
        {projects.map((project, index) => (
          <Project showQr={showQr} key={index} {...project} />
        ))}
      </List>
    </section>
  )
}
