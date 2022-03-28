import styles from '../styles/Resultado.module.css'
import { useRouter } from 'next/router'

export default function resultado() {

  const router = useRouter()
  const total = +router.query.total
  const certas = +router.query.certas
  const percentual = Math.round((certas / total) * 100)

  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <div>{total}</div>
      <div>{certas}</div>
      <div>{`${percentual}%`}</div>
    </div>
  )
}