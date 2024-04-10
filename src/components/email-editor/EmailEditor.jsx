import { useMutation, useQueryClient } from '@tanstack/react-query'
import parse from 'html-react-parser'
import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import { useRef, useState } from 'react'
import { emailService } from '../../services/email.service'
import styles from './EmailEditor.module.scss'
import { applyStyle } from './apply-style.js'

export function EmailEditor() {
  const [text, setText] = useState(``)
  const [selectionStart, setSelectionStart] = useState(0)
  const [selectionEnd, setSelectionEnd] = useState(0)
  const [selectedText, setSelectedText] = useState()

  const textRef = useRef()

  const queryClient = useQueryClient()

  const {mutate, isPending} = useMutation({
    mutationKey: ['create email'],
    mutationFn: () => emailService.sendEmail(text),
    onSuccess() {
      setText('')
      queryClient.refetchQueries({queryKey: ['email list']})
    }
  })

  const updateSelection = () => {
    if(!textRef.current) return
    setSelectionStart(textRef.current?.selectionStart)
    setSelectionEnd(textRef.current?.selectionEnd)
  }

  const applyFormat = (format) => {
    setSelectedText(text.substring(selectionStart, selectionEnd))
    const before = text.substring(0, selectionStart)
    const after = text.substring(selectionEnd)
    
    setText(before + applyStyle(format, selectedText) + after);
  }



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

