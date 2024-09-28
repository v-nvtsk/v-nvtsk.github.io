import { PersonalInfo } from '@/types'
import { QR } from '@components/qr-code'

export function Person({ name, post }: Partial<PersonalInfo>) {
  return (
    <>
      <h1 className="person__name">{name}</h1>
      <h2 className="person__position">{post}</h2>
      <QR text="https://github.com/v-nvtsk" />
    </>
  )
}
