import { useState, useEffect } from "react";

export function useTypingEffect(text: string, speed = 200) {
  const [displayedText, setDisplayedText] = useState(text[0]);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(intervalId);
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return displayedText;
}
