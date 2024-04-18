import { useQuery } from '@tanstack/react-query'
import parse from 'html-react-parser'
import { emailService } from '../../services/email.service'
import styles from './EmailList.module.scss'

export function EmailList() {
  const {data} = useQuery({
    queryKey: ['email list'],
    queryFn: () => emailService.getEmails()
  })

  return (
    <div className={styles.emailList}>
      <h2>Email List</h2>
      <ul className={styles.list}>
        {data?.map((email, index) => (
          <li key={index} className={styles.listItem}>
            {parse(email.text)}
          </li>
          
        ))}
      </ul>
    </div>
  )
}