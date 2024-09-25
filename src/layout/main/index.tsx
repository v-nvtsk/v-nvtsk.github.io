import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { PetProjects } from '@/components/projects'
import { Person } from '@/components/person/person-name'

function Main() {
  return (
    <main>
      <Person name="Абвгд Еёжзиклмн" post="frontend-разработчик" />
      <About />
      <PetProjects />
      <Experience />
    </main>
  )
}

export default Main
