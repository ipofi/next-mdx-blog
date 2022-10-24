import Link from 'next/link'
import styles from './nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <span className={styles.home}> My Next.js Blog </span>
      </Link>
      <Link href='/bio'>
        <span className={styles.bio}> Bio</span>
      </Link>
    </nav>
  )
}

export default Nav
