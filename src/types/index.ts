export interface PersonalInfo {
  name: string
  post: string
}

export interface About {
  text: string[]
}

export interface Contacts {
  phone: string
  email: string
  github: string
  telegram: string
  city: string
}

export type ExperienceList = ExperienceItem[]

export interface ExperienceItem {
  mostRecent?: boolean
  startDate: string
  endDate: string
  organization?: string
  post: string
  postDescription: string
  responsibilities: string[]
  achievements?: string[]
}

export interface Skills {
  title: string
  list: string[]
}

export type SkillsList = Skills[]

export interface EducationItem {
  institution: string
  specialization: string
  startDate?: string
  endDate?: string
  description?: string
}

export interface HigherEducationItem extends Omit<EducationItem, 'title'> {
  faculty?: string
}

export interface Education {
  courses: EducationItem[]
  higherEducation: HigherEducationItem[]
}

export interface PetProject {
  title: string
  stack: string[]
  link: string
  deployLink?: string
  description: string
  hasMobileVersion?: boolean
}

export type PetProjects = PetProject[]

export interface Language {
  name: string
  grade: string
  mark?: number
}

export interface CVData {
  personal: PersonalInfo
  about: About
  languages: Language[]
  contacts: Contacts
  skills: SkillsList
  education: Education
  experience: ExperienceList
  projects: PetProjects
}
