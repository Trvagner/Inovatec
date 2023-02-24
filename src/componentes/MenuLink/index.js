
import { Link } from 'react-router-dom'
import styles from './MenuLink.module.css'

export default function MenuLink({children,to}) {

        
    return (
     <Link className={styles.link} to ={to}
     >
        {children}
     </Link>   
  )
}
