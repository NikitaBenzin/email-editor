export const applyStyle = (style, selectedText) => {
  let formattedText = selectedText

  switch (style) {
    case 'bold':
      formattedText = '<b>' + selectedText + '</b>'
      break
    case 'italic':
      formattedText = '<i>' + selectedText + '</i>'
      break
    case 'underline':
      formattedText = '<u>' + selectedText + '</u>'
      break
    default:
      formattedText = selectedText
      break

  }
  return formattedText
}