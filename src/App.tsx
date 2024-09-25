import './index.css'
import Main from './layout/main'
import Sidebar from './layout/sidebar'
import styles from './style.module.css'

function App() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
