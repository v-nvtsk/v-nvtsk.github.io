import { useSelector } from 'react-redux'
import styles from './style.module.css'
import { appSelector } from '../../store/selectors/appSelector'

export function Header({ savePdf }: { savePdf: (ev: React.MouseEvent) => void }) {
  const { editMode } = useSelector(appSelector)

  return (
    <header className={styles.header}>
      <ul className={styles.menu}>
        {editMode && (
          <>
            <li className={styles.menuItem}><a href="#" className={styles.menuLink}>new</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuLink}>open</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuLink}>save</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuLink}>print</a></li>

            <li className={styles.menuItem}><a href="#" className={styles.menuLink}>edit mode</a></li>
            <li className={styles.menuItem}><a href="#" className={styles.menuLink}>view mode</a></li>

            <li className={styles.menuItem}><a href="#" className={styles.menuLink}>change color</a></li>
          </>
        )}

        <li className={styles.menuItemRight}>
          <button
            className={styles.pdfButton}
            onClick={savePdf}
          >
            PDF download
          </button>
        </li>
      </ul>
    </header>
  )
}
