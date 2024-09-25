export function Person({ name, post }: { name: string, post: string }) {
  return (
    <>
      <h1 className="person__name">{name}</h1>
      <h2 className="person__position">{post}</h2>
    </>
  )
}
