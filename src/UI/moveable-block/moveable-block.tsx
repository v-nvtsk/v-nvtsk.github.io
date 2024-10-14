import styles from './style.module.css'

export function MoveableBlock() {
  return (
    <div className={styles.moveButtons}>
      <button className={styles.moveBtn}>↑</button>
      <button className={styles.moveBtn}>↓</button>
    </div>
  )
}
