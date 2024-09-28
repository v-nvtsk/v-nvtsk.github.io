import styles from './style.module.css'

export function Photo() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.imageWrapper}>
        <img src="/photo.webp" alt="portrait" className={styles.image} />
      </div>
    </section>
  )
}
