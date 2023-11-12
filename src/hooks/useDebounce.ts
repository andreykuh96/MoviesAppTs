import { useCallback, useRef } from 'react';

export default function useDebounce(cb: (...args: any[]) => void, delay: number) {
  const timer = useRef<NodeJS.Timeout | null>();

  const debouncedCallback = useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        cb(...args);
      }, delay);
    },
    [cb, delay]
  );

  return debouncedCallback;
}
