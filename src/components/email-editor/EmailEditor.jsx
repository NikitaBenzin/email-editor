import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from './EmailEditor.module.scss'
import { useEditor } from './useEditor'

export function EmailEditor() {
  const [text, setText] = useEditor()


  return (
    <div className={styles.emailEditor}>
      <h2>Email editor</h2>

      <div className={styles.preview}>{text}</div>
      <div className={styles.editorLayout}>
        <textarea
          spellCheck='false'
          className={styles.editor}
          value={text}
          onChange={e => setText(e.target.value)}
        />

        <div className={styles.actions}>
          <div className={styles.tools}>
            <button onClick={() => setText('')}>
              <Eraser size={17} />
            </button>
            <button onClick={() => applyFormat('bold')}>
              <Bold size={17} />
            </button>
            <button onClick={() => applyFormat('italic')}>
              <Italic size={17} />
            </button>
            <button onClick={() => applyFormat('underline')}>
              <Underline size={17} />
            </button>
          </div>
          <button>
            Send now
          </button>
        </div>
      </div>
    </div>
  )

}

