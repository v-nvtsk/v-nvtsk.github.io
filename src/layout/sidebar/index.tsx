import { Contacts } from '@/components/contacts'
import { Education } from '@/components/education'
import { Languages } from '@/components/languages'
import { Skills } from '@/components/skills'
import { Photo } from '@components/photo'

function Sidebar() {
  return (
    <div>
      <Photo />
      <Contacts />
      <Skills />
      <Languages />
      <Education />
    </div>
  )
}

export default Sidebar
