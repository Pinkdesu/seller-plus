import { useCallback, useEffect } from 'react';

export const useScrollLoader = (callback, { hasMore, perOffset = 100 }) => {
  const loadScroll = useCallback(() => {
    if (hasMore) {
      const loadMore =
        window.innerHeight + window.pageYOffset + perOffset >=
        document.body.offsetHeight;

      if (loadMore) {
        callback();
      }
    }
  }, [callback, hasMore, perOffset]);

  useEffect(() => {
    window.addEventListener('scroll', loadScroll);

    return () => {
      window.removeEventListener('scroll', loadScroll);
    };
  }, [loadScroll]);
};
