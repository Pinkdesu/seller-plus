export default function pluralize(count, locales, locale, withNumber = true) {
  const cases = [2, 0, 1, 1, 1, 2];
  const resultLocale =
    locales[
      count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]
    ];

  if (withNumber) return locale(resultLocale, { count });

  return locale(resultLocale);
}
