import type { Metadata } from 'next'
import './globals.css'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: 'My App',
  description: 'Мое приложение на Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <a href="/" className={styles.logo}>MyApp</a>
            <nav className={styles.nav}>
              <a href="/" className={styles.navLink}>Главная</a>
              <a href="/products" className={styles.navLink}>Продукты</a>
              <a href="/posts/1" className={styles.navLink}>Посты</a>
            </nav>
          </div>
        </header>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          
        </footer>
      </body>
    </html>
  )
}