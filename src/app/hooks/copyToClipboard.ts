import { useCallback, useState } from "react";

export const useCopyToClipboard = () => {
    const [copied, setCopied] = useState<boolean>();
    const copy = useCallback((text: string) => {
      if (!copied) {
        void navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    }, [setCopied, copied]);
    return { copied, copy };
}