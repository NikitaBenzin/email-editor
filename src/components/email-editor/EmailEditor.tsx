import parse from 'html-react-parser'
import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from './EmailEditor.module.scss'
import { useEditor } from './useEditor'

export function EmailEditor() {
  const { text, setText, applyFormat, updateSelection, mutate, isPending, textRef } = useEditor()

  return (
    <div className={styles.emailEditor}>
      <h2>Email editor</h2>

      {text && <div className={styles.preview}>{parse(text)}</div>}
      
      <div className={styles.editorLayout}>
        <textarea
          ref={textRef}
          spellCheck='false'
          className={styles.editor}
          value={text}
          onSelect={updateSelection}
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
          <button disabled={isPending} onClick={mutate}>
            Send now
          </button>
        </div>
      </div>
    </div>
  )

}

