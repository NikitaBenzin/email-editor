import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { emailService } from "../../services/email.service.js";
import { applyStyle } from "./apply-style.js";

export function useEditor() {
  const [text, setText] = useState(``);
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create email"],
    mutationFn: () => emailService.sendEmail(text),
    onSuccess() {
      setText("");
      queryClient.refetchQueries({ queryKey: ["email list"] });
    },
  });

  const updateSelection = () => {
    if (!textRef.current) return;
    setSelectionStart(textRef.current?.selectionStart);
    setSelectionEnd(textRef.current?.selectionEnd);
  };

  const applyFormat = format => {
    const selectedText = text.substring(selectionStart, selectionEnd);

    if (!selectedText) return;

    const before = text.substring(0, selectionStart);
    const after = text.substring(selectionEnd);

    setText(before + applyStyle(format, selectedText) + after);
  };

  return {
    text,
    setText,
    applyFormat,
    updateSelection,
    mutate,
    isPending,
    textRef,
  };
}
