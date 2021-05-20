import { useEffect } from 'react';

export const useClickOutside = (ref, handler, active = true) => {
  useEffect(() => {
    const listener = (event) => {
      const { current } = ref;

      if (!current || current.contains(event.target) || !active) return;

      handler(event);
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler, active]);
};
