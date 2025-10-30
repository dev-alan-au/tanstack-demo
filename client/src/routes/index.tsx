import { createFileRoute } from '@tanstack/react-router'
import styles from './index.module.scss';

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className={styles.container}>
      Hello
    </div>
  )
}
