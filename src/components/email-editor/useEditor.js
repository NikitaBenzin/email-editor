import { useState } from 'react'

export function useEditor() {
  const [text, setText] = useState(`Enter email...`)


  return { text, setText }
}