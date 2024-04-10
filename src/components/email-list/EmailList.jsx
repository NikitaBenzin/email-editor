import styles from './EmailList.module.scss'

export function EmailList() {


  return (
    <div className={styles.emailList}>
      <h2>Email List</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam impedit delectus magni fugit voluptatibus modi dicta maxime autem deserunt explicabo animi, voluptatum omnis a mollitia illo iure, aliquam repudiandae nulla.
        </li>
      </ul>
    </div>
  )
}