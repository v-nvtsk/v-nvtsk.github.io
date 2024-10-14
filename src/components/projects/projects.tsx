import { PetProject } from '@/types'
import { List, Title } from '@/UI'
import { Project } from './project'

interface Props {
  projects: PetProject[]
  showQr?: boolean
}

export function PetProjects({ projects, showQr = false }: Props) {
  return (
    <section>
      <Title title="PET проекты" />
      <List padding={0}>
        {projects.map((project, index) => (
          <Project showQr={showQr} key={index} {...project} />
        ))}
      </List>
    </section>
  )
}
