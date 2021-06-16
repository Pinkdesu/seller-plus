import { useCallback, useEffect } from 'react';
import throttle from 'lodash.throttle';
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
    const onScroll = throttle(loadScroll, 200);

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [loadScroll]);
};
