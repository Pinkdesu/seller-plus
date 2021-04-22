import { useCallback, useMemo } from 'react';
import getUserLocale from 'get-user-locale';
import { en, ru } from '../locales';

export const useLocale = () => {
  const activeLocale = useMemo(() => 'ru' || getUserLocale(), []);

  const messages = useMemo(() => (activeLocale.includes('ru') ? ru : en), [
    activeLocale,
  ]);

  const locale = useCallback(
    (key, args) => {
      if (args) {
        let str = locale(key);

        Object.keys(args).forEach((argKey) => {
          str = str.split(`\${${argKey}}`).join(args[argKey]);
        });

        return str;
      }

      if (messages?.[key]) {
        return messages[key];
      }

      if (process.env.NODE_ENV === 'development') {
        console.error(
          `Bad locale lang: ${activeLocale}, key: ${key || '(empty)'}`,
        );
      }

      return '';
    },
    [activeLocale, messages],
  );

  return locale;
};
