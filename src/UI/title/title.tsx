import styles from './style.module.css'
export function Title({ title }: { title: string }) {
  return (
    <h2 className={styles.title}>
      {title}
    </h2>
  )
}
