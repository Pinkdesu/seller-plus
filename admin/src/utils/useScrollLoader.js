import { useCallback } from 'react';

const useScrollLoader = (callback, { hasMore, perOffset = 100 }) => {
  return useCallback(
    ({ target }) => {
      if (hasMore) {
        const loadMore =
          target.scrollTop + target.offsetHeight + perOffset >=
          target.scrollHeight;

        loadMore && callback();
      }
    },
    [hasMore, callback, perOffset],
  );
};

export default useScrollLoader;
