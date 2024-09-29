import { PetProject } from '@/types'
import { List, Title } from '@/UI'
import { Project } from './project'

interface Props {
  projects: PetProject[]
}

export function PetProjects({ projects }: Props) {
  return (
    <section>
      <Title title="PET проекты" />
      <List>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </List>
    </section>
  )
}
