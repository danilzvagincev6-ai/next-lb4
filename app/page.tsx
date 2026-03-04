import styles from './page.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <a href="/products" className={styles.card}>
          <h2>Продукты</h2>
          <p>Список всех продуктов</p>
        </a>
        <a href="/posts/1" className={styles.card}>
          <h2>Посты</h2>
        </a>
      </div>
    </div>
  )
}