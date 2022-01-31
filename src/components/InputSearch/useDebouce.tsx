import { useRef } from "react";

function useDebounce(func: any, delay: number) {
  const timeoutref = useRef<number>(0);
  function debounceFunction(...args: any) {
    window.clearInterval(timeoutref.current);
    timeoutref.current = window.setTimeout(() => {
      func(...args);
    }, delay);
  }
  return debounceFunction;
}
export default useDebounce;
