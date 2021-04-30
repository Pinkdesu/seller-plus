import { useEffect, useRef } from 'react';
import { CLIENT_HEIGHT } from '~/features/Header/constants';

export const useParallax = ({ speed }) => {
  const ref = useRef();

  useEffect(() => {
    function handleScroll() {
      const offset = window.pageYOffset;

      if (offset <= CLIENT_HEIGHT) {
        ref.current.style.backgroundPositionY = `${offset * speed}px`;
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, speed]);

  return ref;
};
