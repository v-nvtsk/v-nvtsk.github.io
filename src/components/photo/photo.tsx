import styles from './style.module.css'

export function Photo() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.circleWrapper}>
        <div className={styles.imageWrapper}>
          <img src="/photo.png" alt="portrait" className={styles.image} />
        </div>
      </div>
    </section>
  )
}
